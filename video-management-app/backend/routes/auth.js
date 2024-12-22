const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

const router = express.Router()

router.post('/register', async (req, res) => {
  const {username, password} = req.body

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({username, password: hashedPassword})

  try {
    await user.save()
    res.status(201).send('User registered successfully')
  } catch (err) {
    res.status(400).send('Error registering user')
  }
})

router.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username})

  if (!user) return res.status(401).send('Invalid credentials')

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(401).send('Invalid credentials')

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
  res.json({token})
})

module.exports = router
