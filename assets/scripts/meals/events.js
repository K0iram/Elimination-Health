'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onCreateMeal = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  data.meal.user = store.user.id;
  api.createMeal(data)
    .then((response) => {
      store.meal = response.meal;
    })
    .then(ui.creatMealSuccess)
    .catch(ui.creatMealFailure);
};

// const onCreateGame = function (event) {
//   let data = getFormFields(event.target);
//   event.preventDefault();
//   $('.board').hide();
//   $('.btn-show').hide();
//
//   api.createGame(data)
//   .then((response) => {
//
//     gameOver = false;
//     //as soon as i create a new game show the board
//     $('.board').show();
//     $('.btn-show').show();
//     //take what we get from the sever and put in store
//     store.game = response.game;
//   })
//     .then(ui.success)
//     .catch(ui.failure);
// };

const addHandlers = () => {
  $('#create-meal').on('click', onCreateMeal);
};

module.exports = {
  addHandlers,
};
