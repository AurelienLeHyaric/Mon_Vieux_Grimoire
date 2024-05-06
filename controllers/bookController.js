const Book = require("../models/Book")
const fs = require("fs")
const { compressImage, saveImage } = require("../utils/imageProcessor")

exports.createBook = async (req, res, next) => {
   try {
      const bookObject = JSON.parse(req.body.book)
      delete bookObject._id
      delete bookObject._userId

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
         res.status(400).json({ message: "No book uploaded" })
      }
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

exports.getBooks = (req, res, next) => {
   Book.find()
      .then((books) => res.status(200).json(books))
      .catch((error) => res.status(400).json({ error }))
}

exports.getBook = (req, res, next) => {
   Book.findOne({ _id: req.params.id })
      .then((book) => res.status(200).json(book))
      .catch((error) => res.status(404).json({ error }))
}

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
         return res.status(401).json({ message: "Not authorized" })
      }
      if (req.file) {
         const compressedImage = await compressImage(req.file.buffer)
         const newimagePath = await saveImage(compressedImage, req.file.originalname, "uploads")
         bookObject.imageUrl = `${req.protocol}://${req.get("host")}/${newimagePath}`
      }

      await Book.updateOne({ _id: req.params.id }, { ...bookObject, _id: req.params.id })
      res.status(200).json({ message: "Livre modifié!" })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

exports.deleteBook = (req, res, next) => {
   Book.findOne({ _id: req.params.id })
      .then((book) => {
         if (book.userId != req.auth.userId) {
            res.status(401).json({ message: "Not authorized" })
         } else {
            const filename = book.imageUrl.split("/uploads/")[1]
            fs.unlink(`uploads/${filename}`, () => {
               Book.deleteOne({ _id: req.params.id })
                  .then(() => {
                     res.status(200).json({ message: "Livre supprimé !" })
                  })
                  .catch((error) => res.status(401).json({ error }))
            })
         }
      })
      .catch((error) => {
         res.status(500).json({ error })
      })
}
