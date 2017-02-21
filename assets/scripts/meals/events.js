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

const onUpdateMeal = function (event) {
  event.preventDefault();
  console.log(event.target);
  let data = getFormFields(event.target);
  let id = event.target.getAttribute('data-id');
  api.updateMeal(data, id)
    .then(ui.UpdateMealSuccess)
    .catch(ui.UpdateMealFailure);
};


const onRemoveMeal = function (event) {
  let id = event.target.getAttribute('data-id');
  event.preventDefault();
  api.removeMeal(id)
    .then(ui.removeMealSuccess)
    .catch(ui.removeMealFailure);
};

const addHandlers = () => {
  $('#create-meal').on('submit', onCreateMeal);
  $('#show-meals').on('click', onGetMeals);
  $('.meal-show').on('submit', '.edit-button', onUpdateMeal);
  $('.meal-show').on('click', "#delete-meal-button", onRemoveMeal);
};

module.exports = {
  addHandlers,
};
