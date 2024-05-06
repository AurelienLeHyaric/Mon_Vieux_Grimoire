//Utilitaire qui s'occupera de traiter l'image reçue (la compresser puis la sauvegarder)
const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

async function compressImage(buffer) {
   return sharp(buffer).resize({ width: 463, height: 595 }).toBuffer()
}

async function saveImage(buffer, originalName, destination) {
   const uploadsDirectory = path.join(__dirname, "..", destination)

   //Tente d'accéder au dossier des uploads sinon le créer
   try {
      await fs.promises.access(uploadsDirectory)
   } catch (error) {
      await fs.promises.mkdir(uploadsDirectory)
   }
   const fileName = originalName
      .split(" ")
      .join("_")
      .replace(/\.[^/.]+$/, "")
   const timestamp = Date.now()
   const ref = `${fileName}_${timestamp}.webp`
   const link = `${destination}/${ref}`

   //Tente de sauvegarder l'image compressée au format webP
   try {
      await sharp(buffer).webp().toFile(link)
      return link
   } catch (err) {
      throw new Error(`Failed to save image: ${err.message}`)
   }
}

module.exports = { compressImage, saveImage }
