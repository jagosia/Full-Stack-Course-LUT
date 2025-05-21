const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

console.log('MONGO_URI is:', process.env.MONGO_URI)

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))