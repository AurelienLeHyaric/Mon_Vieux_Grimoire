const express = require("express")

const router = express.Router()
const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")
const bookController = require("../controllers/bookController.js")

router.post("/", auth, multer, bookController.createBook)
router.post("/:id/rating", auth, bookController.rateBook)
router.get("/bestrating", bookController.bestBooks)
router.get("/", bookController.getBooks)
router.get("/:id", bookController.getBook)
router.put("/:id", auth, multer, bookController.editBook)
router.delete("/:id", auth, bookController.deleteBook)

module.exports = router
