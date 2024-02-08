const Movie = require('../models/Movie');

const getMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('No movie found 💔');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;
    const movie = await Movie.findOne({ title: title });
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('No movie found 💔');
    }
  } catch (error) {
    return res.status(500).json('Request failed 🙅‍♀️');
  }
};

const getMovieByGenre = async (req, res, next) => {
  const { genre } = req.params;
  try {
    const moviesByGenre = await Movie.find({ genre: genre });
    if (moviesByGenre.length) {
      return res.status(200).json(moviesByGenre);
    } else {
      return res.status(404).json('No movie found 💔');
    }
  } catch (error) {
    return res.status(500).json('Request failed 🙅‍♀️');
  }
};

// const getMoviesByYear = async (req, res, next) => {
//   try {
//     const { year } = req.params;
//     const newerMovies = await Movie.find({ year: { $gte: year } });
//     return res.status(200).json(newerMovies);
//   } catch (error) {
//     return res.status(400).json('Request failed 🙅‍♀️');
//   }
// };
const getMoviesAfter2010 = async (req, res, next) => {
  try {
    const newerMovies = await Movie.find({ year: { $gte: 2010 } });
    return res.status(200).json(newerMovies);
  } catch (error) {
    return res.status(400).json('Request failed 🙅‍♀️');
  }
};
module.exports = {
  getMovies,
  getMovieById,
  getMovieByTitle,
  getMovieByGenre,
  getMoviesAfter2010
};
