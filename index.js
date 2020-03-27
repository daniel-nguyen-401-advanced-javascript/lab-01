#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const NoteActionHandler = require('./lib/note-action-handler.js');

const dbURL = 'mongodb://localhost:27017/appLectureNotes';

/**
 * Simple Server
 * @module index
 */


//start db
mongoose.connect(dbURL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

//grab command line interface
let cli = process.argv.slice(2);

let myInput = new Input(cli);

//async, so bring in disconnect within handler
let myHandler = new NoteActionHandler(myInput.command);