const express = require('express')
const router = express.Router()
const {
  getBooks,
  addBook,
  markBookAsRead,
  deleteBook,
} = require('../controllers/bookController')
const { protect } = require('../middleware/authMiddleware')

// GET /api/books       → get all books
// POST /api/books      → add a new book
router.route('/').get(protect, getBooks).post(protect, addBook)

// PUT /api/books/:id/mark-read → mark as read
// DELETE /api/books/:id        → delete book
router.route('/:id/mark-read').put(protect, markBookAsRead)
router.route('/:id').delete(protect, deleteBook)

module.exports = router
