require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {NODE_ENV} = require('./config');

const notesRouter = require('./notes/notes-router.js');
const foldersRouter = require('./folders/folders-router.js');

const app = express();

const morgOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morgOption));
app.use(cors());
app.use(helmet());

app.get('/', (req,res) => {
  res.status(200).send('Noteful API');
});

app.use('/notes',notesRouter);

app.use('/folders',foldersRouter);

app.use(function errorHandler(error,req,res,next){ //eslint-disable-line
  let response;
  if(NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  }else{
    console.log(error);
    response = {message: error.message, error};
  }
  res.status(400).json(response);
});

module.exports = app;