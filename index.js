'use strict';

console.log('i have an app');

console.log(process.argv.splice(2));

/*

*/

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);