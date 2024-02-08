require('dotenv').config();
const express = require('express');
const { connect } = require('./config/db');
const app = express();
const PORT = 3000;
connect();
app.listen(PORT, (req, res, next) => {
  console.log(`Escuchando en http://localhost:${PORT} 👂`);
});
