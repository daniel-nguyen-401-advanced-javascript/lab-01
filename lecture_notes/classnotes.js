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

let note = new Note(formattedInput);
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

const noteSchema = {
  id: {type: 'string', required: true},
  note: {type: 'string', required: true},
  categoryID: {type: 'string', required: false},
}

// Mongo DB notes

//install mongo globally (done)
// make new data folder
// put package.json in there
/// mongod --dbpath=[data/path] // ties your database to the thing as a local db, this will take awhile to run, leave it alone
// access this db via mongo shell
// a server is a thing that runs certain processes until told to stop
// mongo [enter] should access your mongo shell/terminal, kinda like psql
// mongo DB Atlas, client that helps us use mongodb

// atlas calls dbs "clusters"
// mongo DB compass - gui -
// helpful tool for folks who dont want to use mongo via terminal cli

// ATLAS jsut for windows users
// need to use mongodb URL to connect to cluster
// ex mongodb:localhost:PORTNUMBER // default is 27017
// after connect, you should see "admin, config, local"
// follow some steps
// will output a terminal input that gives you access to prod database (not local) you linked in Atlas
// ATLAS just for windows users

////MONGOOSE NOTES////
// do not commit data folder when submitting labs
// files are too large for all that
// will need to setup package.json file for data folder
//will need to npm install mongoose within the directory of the project

////////////////////////////////
// index.js setup for mongoose usage
//////////////////////

const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/app';
/// stuff after port num/ should be name of the db you are using
const Notes = require('path to notes schema');
const Categories = require('path to category schema');

// START DB LINE
//lets us connect to mongoose stuff, first param is dbURL, second param is object consisting of options, get the options from looking at stuff in mongoose install notes
mongoose.connect(dbURL, {
  useNewURLParser: true, useUnifiedTopology: true
});
// the above establishes connection to external database
// so you wil have to specify when you want to disconnect from it

// do some actions while in DB
// these actions are async, will complete before disconnect happens

let args = process.argv.slice(2);

// here we will try to list all notes?

const dbOperations = async () => {

  // to add note to db
  if (args.length > 0) {
    // prob wanna save new note
    //need to create new instance of model before we save
    // model = notes
    // build a piece of data that fits rules of the model
    let newNote = new Notes({
      //id auto gen
      note: args[0],
      //category doesnt matter here
    });
    try {
      // use try/catch here because otherwise, error makes app hang
      await newNote.save();
      // saves full version of this note obj

      // if it belongs to a category
      // see if that cat exists
      // if not, add that cat (let newCat = new Categories({}))

          // if so, then get id of the cate
          // save that ID in the cat array for this note
     } catch(e){
       console.error(e);
     }
  }
  
  // to see all notes and categories
  let allNotes = await Notes.find();
  let allCats = await Categories.find();

  //to find specific part of this stuff
  // finds first cat w name of important
  let importCat = await Categories.findOne({name: 'important'});
  // find by id
  let importCatId = importCat._id;

  //filter to only notes that have category 'important'
    let filterNotes = allNotes.filter(val => {
      if(val.category && val.category.length)
      // if it has a cat and cat has value
      return val.category.includes(importCatId);
      // return it if it matches that ID i care about
    });

    //to show that search/filter
    filterNotes.forEach(val => {
      console.log(val.note);
    })

  // to format output cleanly without extra JSON stuff 
  allNotes.forEach( val => {
    console.log(val.Notes);
  });

  console.log('---------');

  allCats.forEach( val => {
    console.log(val.Name);
  })


  //close the db after await
  mongoose.disconnect();
};

dbOperations();

// CLOSE DB LINE at the end
// mongoose.disconnect();

// to handle mongoose schema, create new folder outside of data folder called "models". this is for data modeling. then new file called "notes-schema.js"

// try to add new note



/////////////////////////////
// notes-schema.js
////////////

'use strict';

const mongoose = require('mongoose');
// mongoose is our package
/// mongoose exports a class Schema
// wea re passng our schema obj as a param to the Schema constructor
// this should return an instance of mongoose.Schema

const notesSchema = {
    id: { type: 'string', required: true},
    note: { type: 'string', required: true},
    category: { type: 'array'}
};
// generic schema above
// mongoose schema below, passing in obj as param

const notesSchema = mongoose.Schema({
  id: { type: 'string', required: true},
  note: { type: 'string', required: true},
  category: { type: 'array'}
});

// in mongoose, defined in that package, simple ex below
class Schema {
  constructor(obj){
    /// does stuff w obj
  }
}

let mySchema = new Schema({blah})

// mongoose diff syntax schema types are on the mongoose documentation site. BELOW IS CURRENT SYNTAX
const notesSchema = mongoose.Schema({
  // _id: { type: mongoose.Types.ObjectId, required: true},
  // don tneed to add id, it is automatic i think
  note: { type: String, required: true},
  category: { type: Array}
});

// want to build data model from this schema
// first param, name of collection (plural), mongo always adds an S at end
// second param, X Schema
const notesModel = mongoose.model('notes', notesSchema);
// now we can interact with the notesModel rather than the schema
// all this to create a model for our notes
// this lets mongoose do lots of validation for us

module.exports = notesModel;

/////
////////////////////
///// categories schema build
/// categories-schema.js
//////////////

'use strict';
const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true}
});

const categoriesModel = mongoose.model('categories', categoriesSchema);

module.exports = categoriesModel;

//