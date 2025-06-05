const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)
app.use('/api/books', bookRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`))
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message)
  })
