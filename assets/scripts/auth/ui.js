'use strict';
const store = require('../store');

const checkForUser = function() {
  //if user is already signed in
  if(!!store.user.id){
    loggedInSuccess();

    $('#sign-in').hide();
    $('#sign-out').show();
    $('#change-password').show();
    $('#logbox2').show();
    $('#show-meals').show();
  } else {
    $('#sign-out').hide();
    $('#change-password').hide();
    $('#sign-in').show();
    $('#logbox2').hide();
  }
};

const signUpFailure = (err) => {
	if (err.status === 400) {
		//unauthorized
		$('.alert span').text("Something went wrong. Check your email/password.");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();
	} else {
		$('.alert span').text("An unknown error occured.");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();

	}
};

const signUpSuccess = (resp) => {
  $("#sign-up")[0].reset();
  $('#logbox').hide();
  $('.alert span').text("Thanks for signing up! Please sign in!");
  $('.alert').slideDown();

  $('.alert').delay(2000).slideUp();
};

const signInSuccess = (resp) => {
	store.user = resp.user;
	//keeps a copy of the user in local storage to keep  session open
	window.localStorage.setItem('user', JSON.stringify(resp.user));
  loggedInSuccess();
  $('.alert span').text('You have signed is as ' + resp.user.email);
	$('.alert').slideDown();

	$('.alert').delay(2000).slideUp();


	checkForUser();
	return store.user;
};


const loggedInSuccess = () => {
  $("#sign-in")[0].reset();
  $('#signIn').hide();
  $('#logbox').hide();
};

const signOutSuccess = () => {
  $('#logbox').show();
  $('#lobbox2').hide();


	store.user = {};
	// remove local storage user copy.
	window.localStorage.removeItem('user');
	checkForUser();
	return store;
};

const signInFailure = (err) => {
	if (err.status === 401) {
		//unauthorized
		$('.alert span').text("Wrong username or password! Try again");
    $('.alert').slideDown();

  	$('.alert').delay(2000).slideUp();
	} else {
		$('.alert span').text("An unknown error occured.");
    $('.alert').slideDown();

  	$('.alert').delay(2000).slideUp();
	}
};

const passwordChangeFailure = (err) => {
	if (err.status === 400) {
		//unauthorized
		$('.alert span').text("Your existing password is incorect");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();
	} else {
		$('.alert span').text("An unknown error occured.");
    $('.alert').slideDown();

    $('.alert').delay(2000).slideUp();
	}
};

const passwordChangeSuccess = () => {
  $("#change-password")[0].reset();
	$('.alert span').text('You have sucessfully changed your password!');
	$('.alert').slideDown();

	$('.alert').delay(2000).slideUp();
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeFailure,
  passwordChangeSuccess,
  signOutSuccess,
  loggedInSuccess,
  checkForUser
};
