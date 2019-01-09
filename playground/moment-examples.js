var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp: ', now.unix());

var timestamp = 1547064739;
var currentMoment = moment.unix(timestamp);
console.log('current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2019 @ 06:33 PM

console.log('Formatted moment: ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));