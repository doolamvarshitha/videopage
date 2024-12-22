const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
require('dotenv').config()

const authRoutes = require('./routes/auth')
const videoRoutes = require('./routes/video')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use(passport.initialize())
require('./passportConfig')(passport)

app.use('/auth', authRoutes)
app.use('/video', videoRoutes)

const PORT = 5000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
