
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Peter', email: 'peter@test.com'},
        {name: 'Stark', email: 'Stark@test.com'},
        {name: 'Thor', email: 'Stark@test.com'}
      ]);
    });
};

