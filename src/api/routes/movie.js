const { getMovies } = require('../controllers/movie');

const movieRoutes = require('express').Router();

movieRoutes.get('/', getMovies);

module.exports = movieRoutes;
