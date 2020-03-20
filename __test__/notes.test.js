'use strict';

const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js'); 

// i have no idea what is supposed to go in here

// describe
// it
// expect

// testing wants to check that good input and bad input is handled well

// good input
// yes console.log
const goodInput = ['-a', 'text'];

describe('add() outputs console log', () => {
  it('handles good input for console log', () => {
    let result = new Input(goodInput);
    let newNotes = new Notes(result);
    let spy = jest.spyOn(global.console, 'log');
    let add = jest.fn(newNotes.add());
    add();
    expect(spy).toHaveBeenCalled();
  })
})