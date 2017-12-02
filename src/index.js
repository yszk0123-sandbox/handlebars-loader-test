const greeting = require('./greeting.hbs');

document.getElementById('root').innerHTML = greeting({ name: 'world' });
