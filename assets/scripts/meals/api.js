'use strict';

const config = require('../config');
const store = require('../store');

const createMeal = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/meals',
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

module.exports = {
  createMeal
};
