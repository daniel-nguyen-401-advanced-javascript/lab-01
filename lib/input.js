'use strict';

const minimist = require('minimist');

/*
parameters

- export a constructor function
- use minimist or other cli lib to read command line argument
- eval and validate the input (is the command) a valid one and there is data
- returns an [instance] = [complex obj] containing the action to perform and the payload of the action 
*/

// function a -> does something

// what if we had a.valid() that told us if this was valid

// export a's constructor which gives us a
// we should have access to:

// a.command = { action: 'add', payload: 'string}
// a.valid() => a function that tells us if a.command makes sense

// args is something like ['-a', 'my note]
function Input(args) {
  // does stuff
  let formatted = minimist(args);

  // formatted looks like {_: [], a: 'my note'}

  this.command = {};
  
  let objectKeyArray = Object.keys(formatted);
  // console.log('objectkeyArray', objectKeyArray);

  for (let i = 0; i < objectKeyArray.length; i++){
    let key = objectKeyArray[i];
    let val = formatted[key];

    switch(key) {
      case 'a':
      case 'add':
        this.command = {action: 'add', payload: val};
        return;

      default:
        break;
    }
  }
}

Input.prototype.valid = function () {
  // prototype is a slightly outdated syntax
  if(!this.command)
    return false;

  if(!this.command.action)
    return false;

  switch(this.command.action) {
    case 'add':
      //check that this.command.payload is a string
      // check that string is not a number and not true/false ??
      return (typeof this.command.payload === 'string');
    default:
      break;
  }
};

module.exports = Input;
