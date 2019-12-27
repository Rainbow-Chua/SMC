require('dotenv').config();

// **Lodash**
// An utility library to work with  arrays, numbers, objects, strings, etc.
// Recommended methods include `get`, `set`, `pick`, `omit`, `keyBy`, `groupBy`, etc.
// Reference: https://lodash.com/docs/
global._ = require('lodash');

// **Restify Errors**
// A collection of HTTP and REST Error constructors.
// Reference: https://github.com/restify/errors
global.errors = require('restify-errors');

// **Moment**
// An utility library to parse, validate, manipulate, and display dates and times.
// Reference: https://momentjs.com/
// **Moment Timezone**
// An extenstion of Moment to parse and display dates in any timezone.
// Reference: https://momentjs.com/timezone/
global.moment = require('moment-timezone');
// The timezone is normalized to avoid confusion.
moment.tz.setDefault('Etc/UTC');
