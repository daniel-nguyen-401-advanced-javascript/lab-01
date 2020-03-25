#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/appLectureNotes';
const Notes = require('./models/notes-schema.js');
const Categories = require('./models/categories-schema.js');

//start db
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true});

console.log('i have an app');

let args = process.argv.slice(2);

const dbOperations = async () => {
  if (args.length > 0) {
    let newNote = new Notes({
      note: args[0],
    });

    try {
      await newNote.save();

    } catch (e) {
      console.error(e);
    }
  }
  
  //to find cat w type of important
  let importCat = await Categories.findOne({ name: 'important'});
  //find by id
  let importCatId = importCat.id;

}


/**
 * Simple Server
 * @module index
 */

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));
let note = new Notes(parsedInput);