const Movie = require('../models/Movie');

const getMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(400).json('Request failed 🙅‍♀️');
  }
};

module.exports = { getMovies };
