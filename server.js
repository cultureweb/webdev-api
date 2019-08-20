 // Include express
 const express = require('express');

 // This line simply puts Express in a variable called 'app'
const app = express(); // Include body-parser
const bodyParser = require("body-parser");

const cors = require('cors')

const routes = require('./routes/todos')

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

const knex = require('./db/knex');

// Configure headers
/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
 */
// Configure body-parser setting

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use('/', routes)

const logger = console
/* 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, () => {
  logger.info(`Running on http://${HOST}:${PORT}`);
}); */

const server = app
.listen(parseInt(PORT, 10), HOST, () => {
  logger.info(`Running on http://${HOST}:${PORT}`);
});