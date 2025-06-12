import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <h1>📚 MyBooks</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<div>Dashboard (TODO)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
