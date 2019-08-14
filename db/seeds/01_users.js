exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { 
          id: 1, 
          title: 'go to work',
          user_id: 1,
        },
        { 
          id: 2, 
          title: 'go to the beach',
          user_id: 2,
        },
        { 
          id: 3, 
          title: 'get mails',
          user_id: 3,
        },
        { 
          id: 4, 
          title: 'get some headphones',
          user_id: 3,
        },
        { 
          id: 5, 
          title: 'get some headphones',
          user_id: 3,
        },
        { 
          id: 6, 
          title: 'get the food',
          user_id: 3,
        },
      ]);
    });
};
