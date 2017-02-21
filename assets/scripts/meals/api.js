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

const updateMeal = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + id,
    method: 'PATCH',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const removeMeal = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  createMeal,
  getMeals,
  updateMeal,
  removeMeal
};
