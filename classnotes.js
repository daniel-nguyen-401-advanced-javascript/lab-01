const Validator = require(validator.js)
const notesSchema = require(/notes-schema.js)

class Note {
  constructor(noteInput){
    this.validator = new Validator(notesSchema);
    this.body = noteInput.command.payload;
    this.id = Math.random(); 
    if (!this.valid())
      throw 'err';
    if (note.Input.command.action)
      this.execute(noteInput.command);
  }

    valid() {
      return this.validator.validate({id: this.id, note: this.body})
  }

    execute(command){
      if (command.action === 'add')
        this.add(command.payload);
    }

    add(payload){
      console.log(payload);
    }
}

// notes for question about how to use validator?
// dont need to call valid function in constructor
// noteBody comes from index/js

// index.js
const Note = require('./Note.js'))
const Input = require('./input.js');

/// capture all the command line content
// 'node index.js -a "my test note"'

let importantStuff = process.argv.slice(2); 
// outputs user input of ['-a', 'my test note']

let formattedInput = new Input(importantStuff);
// creates instance of input

let note = New Note(formattedInput);
// creates instance of Note
///all of this leads to noteBody aka prams for Note constructor

///
// testing Validator

class Validator {
  constructor(schema) {
    this.schema = schema;
  }

  validate(object){
    //some process to validate
  }

  isRequiredFieldPresent(fieldName, object){
    return true/false;
  }

  isString(str){
    return true/false;
  }
}

//to test this, test file should start by creating instance of validator with some schema
let TestSchema = {
  id: {type: 'number', required: true},
  name: {type: 'string', required: true},

}
//create list of bad objectst to test, you can be creative twith these
let invalidObjectA = {};
let invalidObjectB = {
  id: 'test',
  name: 'test'
}

let invalidObjectC = {
   id: 3,
}
// then create 1 valid object
let validObject = {
  id: 3,
  name: 'sarah',
}

let validator = new Validator(testSchema);
// all of these are tested against testschema

// then in tests, expect that invalid objects (a-c or whatever) always return false when
// you call validate()

// the below is all shorthand tests
expect(validator.validate(invalidObjectA)).toBe(false);
// put in bad object, expect result to be false
// then later
// expect valid objects to return true when you call .validate()

expect(validator.validate(validObject)).toBe(true);

// expect .isString to return false when note given a string
expect(validator.isString(3)).toBe(false);

// expect.isString to be true when gievn string
expect(validator.isString('test')).toBe(true);
//these are independent tests of just class Validator. we just want to test independetn modules thoroughly
// dont want to test order of things in index.js
// just wanna test small things to see if you get what you expect

//////////////////////////
// code challenge review
////////////////

// test review

//For each method that you define, write test assertions for the following conditions at minimum:
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

//want to test arrayshift
function arrayShift(currentArray, newValue){
  // do stuff
  return newArray;
}

// tests for code challenge
// should be in own test folder with own test file

// Happy Path, what is going to work
let goodInputArray = [2, 4, 6, 8];
let goodInputValue = 5;

let expectedGoodResult = [2, 4, 5, 6, 8];

expect(arrayShift(goodInputArray, goodInputValue)).toBe(expectedGoodResult);

// Expected failures
let badInputArrayA = 3;
let badInputArrayB = null;
let badInputArrayC = []; //may or may not be bad input
let badInputValueA = 'test';
let badInputValueB = -1;

//then create lots of variations of describe, it, expect
expect(arrayShift(badInputArray, badInputValue)).toBe(expectedGoodResult);

// Edge Case
// create all possible input values
//input that might trip you up and mess up your tests

let edgeInputArrayA = [1];
let edgeInputArrayB = [1, 3, 1, 4, 5, 'hi'];

let edgeInputValueA = 0;
let edgeInputValueB = [];
let edgeInputValueC = 2;

////////
//DATABASE LECTURE NOTES
////////

