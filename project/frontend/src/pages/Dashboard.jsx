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
                    <p>Manage your reading list here.</p>
                    <BookForm />
                </div>

                <section className='content'>
                    {books.length > 0 ? (
                        <div className='books'>
                            {books.map((book) => (
                                <BookItem key={book._id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <h3>You have not set any books</h3>
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