exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { 
          title: 'go to work',
          user_id: 1,
        },
        { 
          title: 'go to the beach',
          user_id: 2,
        },
        { 
          title: 'get mails',
          user_id: 3,
        },
        { 
          title: 'get some headphones',
          user_id: 3,
        },
        { 
          title: 'get some headphones',
          user_id: 3,
        },
        { 
          title: 'get the food',
          user_id: 3,
        },
      ]);
    });
};
