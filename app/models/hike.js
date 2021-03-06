const mongoose = require('mongoose')

const hikeSchema = new mongoose.Schema({
  parkName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true,
    min: 0
  },
  difficulty: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Hike', hikeSchema)
