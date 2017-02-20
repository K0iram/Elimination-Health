'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onCreateMeal = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.createMeal(data)
    .then((response) => {
      store.meal = response.meal;
    })
    .then(ui.createMealSuccess)
    .catch(ui.createMealFailure);
};

const onGetMeals = function (event) {
  event.preventDefault();
  api.getMeals()
    .then((response) => {
      store.meals = response.meals;
      ui.getMealSuccess();
    });
};


const addHandlers = () => {
  $('#create-meal').on('submit', onCreateMeal);
  $('#show-meals').on('click', onGetMeals);
};

module.exports = {
  addHandlers,
};
