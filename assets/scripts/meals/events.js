'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const editMealTemplate = require('../templates/meal-edit-form.handlebars');

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

const onGetMeals = function () {
  api.getMeals()
    .then((response) => {
      store.meals = response.meals;
      ui.getMealSuccess();
    });
};

const onUpdateMeal = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateMeal(data)
    .then(ui.UpdateMealSuccess)
    .then(() => {
      onGetMeals();
      $('#editModal').modal('hide');
    })
    .catch(ui.UpdateMealFailure);
};

const openEditModal = function (event) {
  event.preventDefault();
  let mealId = $(this).data().mealid;
  let currentMeal = store.meals.filter((meal) => {
    return meal.id === mealId;
  })[0];
  $('#editModal').modal('show');
  $('#editModal .container').html(editMealTemplate({meal: currentMeal}));
  addHandlers();
};


const onRemoveMeal = function (event) {
  let mealId = $(this).data().mealid;
  event.preventDefault();
  api.removeMeal(mealId)
    .then(ui.removeMealSuccess)
    .then(onGetMeals)
    .catch(ui.removeMealFailure);
};

const addHandlers = () => {
  $('#create-meal').on('submit', onCreateMeal);
  $('#show-meals').on('click', onGetMeals);
  $('.meal-delete').on('click', onRemoveMeal);
  $(".meal-edit").on('click', openEditModal);
  $('form.edit-meal').on('submit', onUpdateMeal);
};

module.exports = {
  addHandlers,
};
