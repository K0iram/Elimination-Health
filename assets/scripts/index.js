'use strict';
const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const mealEvents = require('./meals/events.js');

// On document ready
$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  mealEvents.addHandlers();

});
