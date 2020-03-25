'use strict';

const minimist = require('minimist');

//switch needs refactor to integrate some error handling
class Input {
  constructor(cliArgs) {
    // cliArgs >> { action, payload}

    this.command = {};

    let formatted = minimist(cliArgs);
    console.log('formatted:', formatted);

    let keys = Object.keys(formatted);

    keys.forEach(key => {
      // key, val = formatted[key]
      console.log('keys:', keys);
      switch(key){
        case 'a':
        case 'add':
          this.command = { action: 'add', payload: formatted[key], category: false};
          break;
        case 'c':
        case 'category':
          this.command.category = formatted[key];
          break;
        case 'l':
        case 'list':
          this.command = { action: 'list', payload: formatted[key]};
          break;
        case 'd':
        case 'delete':
          this.command = { action: 'delete', payload: formatted[key]};
          break;
        default:
          break;
      }
    });
    console.log(this.command);
  }
}

module.exports = Input;