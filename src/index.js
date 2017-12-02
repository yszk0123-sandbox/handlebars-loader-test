const Handlebars = require('handlebars/runtime');
const greeting = require('./templates/greeting.hbs');
const format = require('./helpers/format');

// HACK: Following code is not working.
// "Hello, {{../helpers/format name}}" in greeting.hbs
Handlebars.helpers.format = format;

document.getElementById('root').innerHTML = greeting({ name: 'world' });
