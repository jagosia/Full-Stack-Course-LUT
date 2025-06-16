import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBook } from '../features/books/bookSlice'

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createBook({ title: title, author: author }))
        setTitle('')
        setAuthor('')
    }

    return (
        <section className='form book-form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='Enter the book title'
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='Enter the author name'
                        type='text'
                        name='author'
                        id='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Add book
                    </button>
                </div>
            </form>
        </section>
    )
}

export default BookForm