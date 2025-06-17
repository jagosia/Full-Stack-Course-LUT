import { useDispatch } from 'react-redux'
import { deleteBook, readBook } from '../features/books/bookSlice'

function BookItem({ book }) {
  const dispatch = useDispatch()
  return (
    <div className='book'>
      <h2>{book.title}</h2>
      <p>{book.author}</p>

      {book.status === 'to-read' && (
        <button class='read-button' onClick={() => dispatch(readBook(book._id))}>I've read it!</button>
      )}

      <button onClick={() => dispatch(deleteBook(book._id))} className='close'>X</button>
    </div>
  )
}

export default BookItem