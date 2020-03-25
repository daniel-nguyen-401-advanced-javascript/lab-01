'use strict';

//import notes schema
// use to create new note to then save to DB

const Validator = require('./validator.js');

/**
 * @module Notes
 */

/**
 * Notes will return a console log with info
 * @param args
 * @class Notes
 */

//refactor to remove validation
class Notes {
  constructor(noteInput){
    this.validator = new Validator(schema);
    this.body = noteInput.command.payload;
    this.id = Math.floor(Math.random() * 100);
    if (!this.valid()){
      throw 'err';
    }
    if (note.Input.command.action){
      this.execute(noteInput.command);
    }
  }
    valid() {
      return this.validator.validate({id: this.id, note: this.body})
    }

    execute(command){
      if (command.action === 'add')
        this.add(command.payload);
    }

    add(payload){
      //refactor to save to db
      console.log(payload);
    }
}

module.exports = Notes;