#! /usr/bin/env node

const argv = require('yargs').argv,
      commander = require('./commander').commander;

const regExp = new RegExp('[a-z]', 'gi');

for (var key in argv) {
    if (key.match(regExp)) {
        commander[key](argv[key]); // Execute Function
    }
}
