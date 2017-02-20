'use strict';


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

module.exports = {
  createMealSuccess,
  createMealFailure
};
