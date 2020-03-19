'use strict';

/*
- exports constructor fn
- compose a prototype method that can execute the correct operation given the above object
- how will you use that object to run the correct method?
- you can predict that add wont be the only action we will have to handle
- write a prototype method called add() that will create an obj representing a note
*/

function Notes(args) {
// notes should be an instance of input which has .command and .valid

if (args.valid()) this.execute(args.command)
  else console.error('ERROR! Invalid arguments sent to app.');
}

Notes.prototype.execute = function(command) {
  switch(command.action) {
    case 'add':
      this.add(command.payload);
      break;
    default: break;
  }
  
};

Notes.prototype.add = function(payload) {
  let id = Math.floor(Math.random() * 100);

  console.log('adding note');
  console.log(id + ':', payload);
};

module.exports = Notes;