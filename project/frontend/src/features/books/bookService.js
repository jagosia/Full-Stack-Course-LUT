import axios from 'axios'

const API_URL = '/api/books/'

// Create new book
const createBook = async (bookData, token) => {
    const response = await axios.post(API_URL, bookData, getHeader(token))

    return response.data
}

// Get user books
const getBooks = async (token) => {
    const response = await axios.get(API_URL, getHeader(token))

    return response.data
}

// Delete user book
const deleteBook = async (goalId, token) => {
    await axios.delete(API_URL + goalId, getHeader(token))

    return goalId
}

function getHeader(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
}

const bookService = {
    createBook,
    getBooks,
    deleteBook
}

export default bookService