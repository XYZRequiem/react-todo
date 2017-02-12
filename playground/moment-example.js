var moment = require('moment');

console.log(moment().format('MMM Do YYYY, HH:mm:ss A'));

var now = moment()

console.log('Current timestamp', now.unix(now));

var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());
