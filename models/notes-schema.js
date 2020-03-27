'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  // id does not need to be included, it will be added by default
  text: { required: true, type: String},
  category: { required: false, type: String},
});

//build data model from this schema
const model = mongoose.model('notes', schema);

module.exports = model;