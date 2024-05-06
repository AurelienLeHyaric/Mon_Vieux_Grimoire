const multer = require("multer")

const MIME_TYPES = {
   "image/jpg": "jpg",
   "image/jpeg": "jpg",
   "image/png": "png",
   "image/webp": "webp",
}

const storage = multer.memoryStorage()
const upload = multer({
   storage: storage,
   fileFilter: (req, file, callback) => {
      const isValidMimeType = MIME_TYPES[file.mimetype]
      if (isValidMimeType) {
         callback(null, true)
      } else {
         callback(new Error("Invalid file type. Only images are allowed."))
      }
   },
})

module.exports = upload.single("image")
