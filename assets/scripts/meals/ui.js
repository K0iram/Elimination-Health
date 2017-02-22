'use strict';

const store = require('../store');
const mealTemplate = require('../templates/meal-list.handlebars');

const createMealSuccess = () => {
  $("#create-meal")[0].reset();
  $('.alert-message').text("New meal created!");
  $('.alert-success').slideDown();

  $('.alert-success').delay(2000).slideUp();
};
const createMealFailure = (err) => {
	if (err.status === 400) {
		//unauthorized
		$('.danger-alert-message').text("Something went wrong, please make sure all feilds are correct.");
    $('.alert-danger').slideDown();

    $('.alert-danger').delay(2000).slideUp();
	} else {
		$('.danger-alert-message').text("An unknown error occured. Please try again.");
    $('.alert-danger').slideDown();

    $('.alert-danger').delay(2000).slideUp();

	}
};

const getMealSuccess = () => {

  const sortedMeals = store.meals.sort(function(a,b){
  return new Date(b.eaten_on) - new Date(a.eaten_on);
});

  const $meals = mealTemplate({meals: sortedMeals});

  $('.meal-show').html( $meals );
};

const updateMealSuccess = () => {
  $('#editModal').modal('hide');
  $('.alert-message').text("Meal Edited!");
  $('.alert-success').slideDown();

  $('.alert-success').delay(2000).slideUp();
};

const removeMealSuccess = () => {
  $('#delete-meal').val('');
  $('.alert-message').text("Meal Removed!");
  $('.alert-success').slideDown();

  $('.alert-success').delay(2000).slideUp();
};
const removeMealFailure = () => {
  $('.danger-alert-message').text("Somthing went wrong! Please try again!");
  $('.alert-danger').slideDown();

  $('.alert-danger').delay(2000).slideUp();
};




module.exports = {
  createMealSuccess,
  createMealFailure,
  getMealSuccess,
  updateMealSuccess,
  removeMealSuccess,
  removeMealFailure
};
