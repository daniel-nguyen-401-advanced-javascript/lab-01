'use strict';

const mongoose = require('mongoose');
const NotesModel = require('../models/notes-schema.js');

/**
 * @module Notes
 */

/**
 * Notes will return a console log with info
 * @param command
 * @class NoteActionHandler
 */

class NoteActionHandler {
  constructor(command){
    if (command && command.action){
      this.execute(command);
    } else {
      console.error('incorrect constructor params');
    }
  }

    ///some error handling may be missing from this. check demo code lab 03 pair programming file
    execute(command){
      console.log('reached execute command', command);
      if (!command.payload){
        console.error('missing payload');
        return;
    }
      switch(command.action){
        case 'add':
          this.add(command.payload, command.category);
          break;
        case 'list':
          this.list(command.payload);
          break;
        case 'delete':
          this.delete(command.payload);
          break;
        default: break;
      }
    }

    async add(noteText, category){
      try {
        let newNote = new NotesModel({ 
          text: noteText, 
          category: category ? category : '',
        });
        await newNote.save();
        mongoose.disconnect();
      } catch(e) {
        console.error('could not add note');
      }
    }

   async list(category) {
     let allNotes = [];

     try {
      allNotes = await NotesModel.find();
     } catch (e) {
       console.error('didnt find notes');
     }

    // this got messy
      allNotes.forEach(val => {
        if (category){
          if (val.category === category)
            {
              console.log('--------');
              console.log(val.text, '/', val.category);
            }
        } else {
          console.log('--------');
          console.log(val.text);
        }
      });
      mongoose.disconnect();
    }
    
    // remember to async/await this and include the disconnect
    delete(noteId) {

    }
  
}

module.exports = NoteActionHandler;