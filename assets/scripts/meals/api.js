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

const getMeals = function () {
  return $.ajax({
    url: config.apiOrigin + '/meals',
    method: 'GET',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  createMeal,
  getMeals
};
