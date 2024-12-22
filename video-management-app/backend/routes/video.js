const express = require('express')
const multer = require('multer')
const Video = require('../models/Video')
const passport = require('passport')

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({storage})

router.post(
  '/upload',
  passport.authenticate('jwt', {session: false}),
  upload.single('video'),
  async (req, res) => {
    const {title, description, tags} = req.body

    try {
      const video = new Video({
        title,
        description,
        tags: tags.split(','),
        fileSize: req.file.size,
        duration: '00:02:30', // Placeholder duration
        userId: req.user._id,
      })
      await video.save()
      res.send('Video uploaded successfully')
    } catch (err) {
      res.status(400).send('Error uploading video')
    }
  },
)

router.get(
  '/',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    const videos = await Video.find({userId: req.user._id})
    res.json(videos)
  },
)

module.exports = router
