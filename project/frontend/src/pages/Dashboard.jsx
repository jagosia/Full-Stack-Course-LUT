import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import BookForm from '../components/BookForm'

function Dashboard() {
  const { user } = useSelector((state) => state.auth)

  if (user) {
    return (
      <div className="dashboard">
        <h2>Your Reading Dashboard</h2>
        <p>Manage your reading list here.</p>
        <BookForm />
      </div>
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