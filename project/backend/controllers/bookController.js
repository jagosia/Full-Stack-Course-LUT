const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')

// @desc    Get all books for current user
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ userId: req.user.id })
  res.json(books)
})

// @desc    Add new book (defaults to status: "to-read")
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  const { title, author } = req.body

  if (!title || !author) {
    res.status(400)
    throw new Error('Please provide both title and author')
  }

  const book = await Book.create({
    userId: req.user.id,
    title,
    author,
    status: 'to-read',
  })

  res.status(201).json(book)
})

// @desc    Mark a book as read
// @route   PUT /api/books/:id/mark-read
// @access  Private
const markBookAsRead = asyncHandler(async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id, userId: req.user.id })

  if (!book) {
    res.status(404)
    throw new Error('Book not found')
  }

  book.status = 'read'
  await book.save()

  res.json(book)
})

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id, userId: req.user.id })

  if (!book) {
    res.status(404)
    throw new Error('Book not found')
  }

  await Book.deleteOne({ _id: book._id })

  res.json({ message: 'Book removed' })
})


module.exports = {
  getBooks,
  addBook,
  markBookAsRead,
  deleteBook,
}
