//var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var knex = require('./db/knex');


//var cors = require('cors');
//var logger = require('morgan');


var app = express();

//app.use(logger('dev'));
//app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/todos', function(req, res) {
  knex.select()
      .from('todos')
      .then(function(todos) {
        res.send(todos);
      })
})
app.get('/todos/:id', function(req, res) {
  
  knex.select()
      .from('todos')
      .where('id', req.params.id)
      .then(function(todos) {
        console.log(req)
        res.send(todos);
      })
})

app.get('/todos-of-user/:id', function(req, res) {
  knex.from('todos')
      .innerJoin('users', 'todos.user_id', 'users.id')
      .where('todos.user_id', req.params.id)
      .then(function(data) {
        res.send(data)
      })
})

app.post('/todos', function(req, res) {
  console.log("req", req)
  console.log("res", res)
  knex('todos').insert({
    title: req.body.title,
    user_id: req.body.user_id
  })
  .then(function() {
    knex.select()
        .from('todos')
        .then(function(todos) {
          res.send(todos);
        })
  })
})

/* const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  }); */

app.listen(port, function() {
    console.log("App is running on port " + port);
});