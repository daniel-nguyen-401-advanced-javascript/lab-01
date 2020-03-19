'use strict';

const Input = require('../lib/input.js');

// describe
// it
// expect

// testing wants to check that good input and bad input is handled well

// bad input
// no command line data (null)
const badInputA = [];
// command line input wrong (not the format of flag + data)
const badInputB = ['WRONG'];
// command line in put has wrong flag
const badInputC = ['-b', 'WRONG'];
// command line input has data that is not a string
const badInputD = ['-a', 'false'];

// good input
// command line input with '-a' followed by a string
const goodInput = ['-a', 'This is a note'];



describe('the module handles bad input gracefully', () => {
  it('handles empty input', () => {
    let result = new Input(badInputA);

    // result.command; {action: '', payload: ''}
    // // when given [], results.command = {}
    // result.valid(); returns true or false if the command makes sense

    expect(result.valid()).toBeFalsy();
  })

  it('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.valid()).toBeFalsy();
  })

  it('handles wrong flag', () => {
    let result = new Input(badInputC);
    expect(result.valid()).toBeFalsy();
  })

  it('handles wrong data type', () => {
    let result = new Input(badInputD);
    expect(result.valid()).toBeFalsy();
  })
})


describe('the module handles good input gracefully', () => {
  it('handles good input for -a flag', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy();
  })
})