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

const updateMeal = function (date, title, description, feeling) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + store.meal.id,
    method: 'PATCH',
    data: JSON.stringify({
      meals: {
          eaten_on: date,
          title: title,
          description: description,
          feeling: feeling
      }
    }),
    contentType: 'application/json',
    headers: {
       Authorization: `Token token=${store.user.token}`,
     }
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
