const Book = require("../models/Book")
const fs = require("fs")
const { compressImage, saveImage } = require("../utils/imageProcessor")

// Ajouter un livre
exports.createBook = async (req, res, next) => {
   try {
      const bookObject = JSON.parse(req.body.book)
      delete bookObject._id
      delete bookObject._userId
      //Si ajout d'une image, compression et sauvegarde de l'image avant ajout
      if (req.file) {
         const compressedImage = await compressImage(req.file.buffer)
         const imagePath = await saveImage(compressedImage, req.file.originalname, "uploads")
         const book = new Book({
            ...bookObject,
            userId: req.auth.userId,
            imageUrl: `${req.protocol}://${req.get("host")}/${imagePath}`,
         })

         await book.save()
         res.status(201).json({ message: "Livre enregistré !" })
      } else {
         res.status(400).json({ message: "Livre non enregistré" })
      }
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

// Récupérer tous les livres
exports.getBooks = async (req, res, next) => {
   try {
      const books = await Book.find()
      res.status(200).json(books)
   } catch (error) {
      res.status(500).json({ error })
   }
}

// Récupérer un livre
exports.getBook = async (req, res, next) => {
   try {
      const book = await Book.findOne({ _id: req.params.id })
      res.status(200).json(book)
   } catch (error) {
      res.status(404).json({ error: "Livre non trouvé" })
   }
}

// Modifier un livre
exports.editBook = async (req, res, next) => {
   try {
      const bookObject = req.file
         ? {
              ...JSON.parse(req.body.book),
              imageUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
           }
         : { ...req.body }

      delete bookObject._userId
      const book = await Book.findOne({ _id: req.params.id })
      if (book.userId != req.auth.userId) {
         return res.status(401).json({ message: "Non autorisé" })
      }
      //Si ajout d'une image, compression et sauvegarde de l'image avant update
      if (req.file) {
         const compressedImage = await compressImage(req.file.buffer)
         const newimagePath = await saveImage(compressedImage, req.file.originalname, "uploads")
         bookObject.imageUrl = `${req.protocol}://${req.get("host")}/${newimagePath}`
      }

      await Book.updateOne({ _id: req.params.id }, { $set: bookObject })
      res.status(200).json({ message: "Livre modifié!" })
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

// Supprimer un livre
exports.deleteBook = async (req, res, next) => {
   try {
      const book = await Book.findOne({ _id: req.params.id })
      if (!book) {
         return res.status(404).json({ message: "Livre non trouvé" })
      }
      if (book.userId !== req.auth.userId) {
         return res.status(401).json({ message: "Non autorisé" })
      }
      //suppression de l'image associée
      const filename = book.imageUrl.split("/uploads/")[1]
      await fs.promises.unlink(`uploads/${filename}`)
      await Book.deleteOne({ _id: req.params.id })
      res.status(200).json({ message: "Livre supprimé !" })
   } catch (error) {
      res.status(500).json({ error })
   }
}

// Noter un livre
exports.rateBook = async (req, res, next) => {
   try {
      const book = await Book.findOne({ _id: req.params.id })
      if (!book) {
         return res.status(404).json({ message: "Livre non trouvé" })
      }

      // Vérification si l'utilisateur a déjà noté ce livre
      const userRating = book.ratings.find((rating) => rating.userId.toString() === req.auth.userId)
      if (userRating) {
         return res.status(403).json({ message: "L'Utilisateur a déjà noté le livre" })
      }
      // Ajout de la nouvelle note à la liste des notes du livre
      book.ratings.push({ userId: req.auth.userId, grade: req.body.rating })

      // Calcul de la moyenne des notes arrondi à un chiffre après la virgule
      const sommeNotes = book.ratings.reduce((total, rating) => total + rating.grade, 0)
      const moyenneNotes = Math.round((sommeNotes / book.ratings.length) * 10) / 10
      book.averageRating = moyenneNotes

      // Mise à jour du livre avec la nouvelle note et la nouvelle moyenne
      await Book.updateOne({ _id: book._id }, { $set: { ratings: book.ratings, averageRating: book.averageRating } })

      const updatedBook = await Book.findOne({ _id: book._id })
      res.status(200).json(updatedBook)
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

// Récupérer les 3 livres les mieux notés
exports.bestBooks = async (req, res, next) => {
   try {
      const books = await Book.find().sort({ averageRating: -1 }).limit(3)
      res.status(200).json(books)
   } catch (error) {
      res.status(500).json({ error })
   }
}
