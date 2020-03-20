#!/usr/bin/env node
'use strict';

console.log('i have an app');

// console.log(process.argv.splice(2));

/*
- Requires the library files you will be writing (input, notes)
- Instantiates an "Input" parser (?)
- Sends properly parsed input to the Notes library for display (notes module?)
- saves command line input
- calls Input constructor
  - CLI is parameter
- calls Notes constructor
  - Input instance is parameter
*/

/**
 * Simple Server
 * @module index
 */

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);