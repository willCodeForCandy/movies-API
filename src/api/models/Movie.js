const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: false },
    year: { type: Number, required: false },
    genre: { type: String, required: false }
  },
  {
    timestamps: true,
    collection: 'movies'
  }
);

const Movie = mongoose.model('movie', movieSchema, 'movies');

module.exports = Movie;
