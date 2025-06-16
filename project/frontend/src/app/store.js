import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import booksReducer from '../features/books/bookSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  }
})
