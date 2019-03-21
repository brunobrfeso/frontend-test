'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
  title:{
    type: String,
    required: true,
  },
  slug:{
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  price:{
    type: Number,
    required: true,
  },
  img:{
    type: String,
    required: true,
  },
  date:{
    type: Date,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  escritor:[{
    type: String,
    required: true,
  }],
  cover:[{
    type: String,
    required: true,
  }],
  penciller:[{
    type: String,
    required: true,
  }],
  active:{
    type: Boolean,
    required: true,
    default: true,
  },
  fblink:{
    type: String,
    required: true,
  },
  twlink:{
    type: String,
    required: true,
  },
  tags:[{
    type: String,
    required: true,
  }],
  imprint:{
    type: String,
    required: true,
  },
  rating:{
    type: String,
    required: true,
  },
  format:{
    type: String,
    required: true,
  },
  upc:{
    type: String,
  },
});

module.exports = mongoose.model('Produto', schema);
