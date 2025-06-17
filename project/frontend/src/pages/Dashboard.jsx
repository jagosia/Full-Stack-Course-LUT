import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookItem from '../components/BookItem'
import BookForm from '../components/BookForm'
import { getBooks, reset } from '../features/books/bookSlice'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, message } = useSelector((state) => state.auth)
    let books = useSelector(
        (state) => state.books.books
    )
    let booksToRead = books.filter(x => x.status == 'to-read')

    let booksRead = books.filter(x => x.status == 'read')
    
    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getBooks())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (user) {
        return (
            <>
                <div className="dashboard">
                    <h2>Your Reading Dashboard</h2>
                    <p>Add book to your list:</p>
                    <BookForm />
                </div>
                
                <section className='content'>
                    <h2>Books to read</h2>
                    {booksToRead.length > 0 ? (
                        <div className='books'>
                            {booksToRead.map((book) => (
                                <BookItem key={book._id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <h3>You have not set any new books to read</h3>
                    )}
                </section>

                <section className='content'>
                    <h2>Read books</h2>
                    {booksRead.length > 0 ? (
                        <div className='books'>
                            {booksRead.map((book) => (
                                <BookItem key={book._id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <h3>You have not set any read books</h3>
                    )}
                </section>
            </>
        )
    }

    return (
        <div className="guest-dashboard" style={{ textAlign: 'center', padding: '2rem' }}>
            <img
                src="/images/bookcase.png"
                alt="Empty bookschelf"
                style={{ maxWidth: '300px', marginBottom: '1.5rem' }}
            />
            <h2>Welcome to MyBooks</h2>
            <p>Your bookshelf is empty. Register to add some books!</p>
            <div style={{ marginTop: '1rem' }}>
                <Link to="/login" style={{ marginRight: '1rem' }}>Log in</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Dashboard