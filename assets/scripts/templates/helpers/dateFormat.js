'use strict';

import moment from 'moment';

module.exports = function() {
	return moment(this).format('MM/DD/YYYY');
};
