// Require Express.js
const express = require('express');
// Initialize Express
const app = express();
// Express Port
const port = 4000;
// Require CORS
const cors = require('cors');
// Require Body Parser
const bodyParser = require('body-parser');

app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// @desc Returns JSON of Movies
// @route GET /api/movies
app.get('/api/movies', (req, res) => {
  // Movies Array
  const mymovies = [
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
    },
    {
      Title: 'Captain America: Civil War',
      Year: '2016',
      imdbID: 'tt3498820',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'
    }
  ];

  // Returns Movies in JSON format
  res.status(200).json({ message: 'Everything is okay', movies: mymovies });
});

// @desc Returns Movie title, year & poster to server
// @route POST /api/movies
app.post('/api/movies', (req, res) => {
  console.log('Movie Recieved!');
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
