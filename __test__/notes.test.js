'use strict';

const Notes = require('../lib/notes.js');

// i have no idea what is supposed to go in here

// describe
// it
// expect

// testing wants to check that good input and bad input is handled well

// bad input
// no console.log
const badInputA = [];

// good input
// yes console.log
const goodInput = ['console.log'];

//dunno what this next stuff does
// earl jay posted it in slack, seemed useful
jest.spyOn(global.console, 'log');
console.log = jest.fn();

describe('the notes module handles bad input gracefully', () => {
  it('handles empty input, no console log', () => {
    let result = new Input(badInputA);
    expect(console.log).not.toHaveBeenCalled();
  })
})


describe('the notes module handles good input gracefully', () => {
  it('handles good input for console log', () => {
    let result = new Input(goodInput);
    expect(console.log).toHaveBeenCalled();
  })
})