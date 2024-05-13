const multer = require("multer")

const MIME_TYPES = {
   "image/jpg": "jpg",
   "image/jpeg": "jpg",
   "image/png": "png",
   "image/webp": "webp",
}
//Multer configuré en mode buffer et avec pris en compte de certains types de fichiers
const storage = multer.memoryStorage()
const upload = multer({
   storage: storage,
   fileFilter: (req, file, callback) => {
      const isValidMimeType = MIME_TYPES[file.mimetype]
      if (isValidMimeType) {
         callback(null, true)
      } else {
         callback(new Error("Type de fichier invalide. Seules les images sont autorisées."))
      }
   },
})

module.exports = upload.single("image")
