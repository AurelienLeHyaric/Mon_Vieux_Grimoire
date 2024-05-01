const express = require("express")

const router = express.Router()
const bookController = require("../controllers/bookController.js")

router.post("/", bookController.createBook)
router.get("/", bookController.getBooks)
router.get("/:id", bookController.getBook)
router.put("/:id", bookController.editBook)
router.delete("/:id", bookController.deleteBook)

module.exports = router
