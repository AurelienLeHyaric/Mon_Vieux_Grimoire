const express = require("express")

const router = express.Router()
const auth = require("../middleware/auth")
const bookController = require("../controllers/bookController.js")

router.post("/", auth, bookController.createBook)
router.get("/", bookController.getBooks)
router.get("/:id", bookController.getBook)
router.put("/:id", auth, bookController.editBook)
router.delete("/:id", auth, bookController.deleteBook)

module.exports = router
