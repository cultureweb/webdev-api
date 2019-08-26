const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', function(req, res){
   res.redirect('/v1/todos');
});

/* This router is mounted at http/localhost:8000/v1/todos */
router.get('/v1/todos', function(req, res) {
  knex.select()
      .from('todos')
      .then(function(todos) {
        res.send(todos);
      })
})
  
  router.get('/v1/todos/:id', function(req, res) {
    knex.from('todos')
        .innerJoin('users', 'todos.user_id', 'users.id')
        .where('todos.user_id', req.params.id)
        .then(function(data) {
          res.send(data)
        })
  })
  
  router.post('/v1/todos', function(req, res) {
    console.log(req.body);
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
  router.put('/v1/todos/:id', function(req, res) {
    knex('todos').where('id',req.params.id)
    .update({
      title: req.body.title,
      completed: req.body.completed
    })
    .then(function() {
      knex.select()
          .from('todos')
          .then(function(todos) {
            res.send(todos);
          })
         }) 
        }) 
    
// Exports the router object
module.exports = router;
