'use strict';

const mongoose = require('mongoose');
const Input = require('input.js file');
const NoteActionHandler = require('noteactionhandler.js');

const dbURL = 'mongodb://localhost:27017/appLectureNotes';

mongoose.connect(dbURL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

//grab command line interface
let cli = process.argv.slice(2);

let myInput = new Input(cli);

//async, so bring in disconnect within handler
let myHandler = new NoteActionHandler(myInput.command);

