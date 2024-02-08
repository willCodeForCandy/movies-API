require('dotenv').config();
const express = require('express');
const { connect } = require('./config/db');
const movieRoutes = require('./src/api/routes/movie');
const app = express();
const PORT = 3000;
connect();
app.use(express.json()); //para poder leer los json del req.body
app.use('/movies', movieRoutes);
app.use('*', (req, res, next) => {
  console.log('Route not found');
  return res.status(404).json('Route not found 🦖');
});
app.listen(PORT, (req, res, next) => {
  console.log(`Escuchando en http://localhost:${PORT} 👂`);
});
