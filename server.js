 // Include express
 const express = require('express');

 // This line simply puts Express in a variable called 'app'
const app = express(); // Include body-parser
const bodyParser = require("body-parser");

const routes = require('./routes/todos')

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

const knex = require('./db/knex');

// Configure body-parser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Configure Headers Tests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// Routes
app.use('/', routes)

const logger = console

const server = app
.listen(parseInt(PORT, 10), HOST, () => {
  logger.info(`Running on http://${HOST}:${PORT}`);
});
