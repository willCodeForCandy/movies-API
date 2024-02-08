const {
  getMovies,
  getMovieById,
  getMovieByTitle,
  getMovieByGenre,
  getMoviesAfter2010
} = require('../controllers/movie');

const movieRoutes = require('express').Router();

movieRoutes.get('/title/:title', getMovieByTitle);
movieRoutes.get('/genre/:genre', getMovieByGenre);
movieRoutes.get('/year2010', getMoviesAfter2010);
movieRoutes.get('/:id', getMovieById);
movieRoutes.get('/', getMovies);

module.exports = movieRoutes;
