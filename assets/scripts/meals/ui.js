'use strict';

const store = require('../store');
const mealTemplate = require('../templates/meal-list.handlebars');

const createMealSuccess = () => {
  $('.alert span').text("New meal created! Click show to view");
  $('.alert').slideDown();

  $('.alert').delay(2000).slideUp();
};
const createMealFailure = (err) => {
	if (err.status === 400) {
		//unauthorized
		$('.alert span').text("Something went wrong, please make sure all feilds are correct.");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();
	} else {
		$('.alert span').text("An unknown error occured. Please try again.");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();

	}
};

const getMealSuccess = () => {

  const sortedMeals = store.meals.sort(function(a,b){
  return new Date(b.eaten_on) - new Date(a.eaten_on);
});

  const $meals = mealTemplate({meals: sortedMeals});

  $('.meal-show').html( $meals );
};

const editMealSuccess = () => {
  $('.alert span').text("Meal Edited! Click show to view your changes!");
  $('.alert').slideDown();

  $('.alert').delay(2000).slideUp();
};

const removeMealSuccess = () => {
  $('#removeMealMoal').modal('hide');
  $('.alert span').text("Meal Removed! Click show to view your changes!");
  $('.alert').slideDown();

  $('.alert').delay(2000).slideUp();
};




module.exports = {
  createMealSuccess,
  createMealFailure,
  getMealSuccess,
  editMealSuccess,
  removeMealSuccess
};
