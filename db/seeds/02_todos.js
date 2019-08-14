
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Peter', email: 'peter@test.com'},
        {id: 2, name: 'Stark', email: 'Stark@test.com'},
        {id: 3, name: 'Thor', email: 'Stark@test.com'}
      ]);
    });
};
