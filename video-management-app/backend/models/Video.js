const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  fileSize: Number,
  duration: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Video', VideoSchema)
