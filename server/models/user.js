const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  spotifyOAuth: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)*/

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }, {
      collection: 'users'
    })
  
  module.exports = mongoose.model('User', userSchema)