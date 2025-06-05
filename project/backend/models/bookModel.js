const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['to-read', 'read'],
      default: 'to-read'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
