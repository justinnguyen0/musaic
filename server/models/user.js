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

let userSchema = new Schema({
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  }, {
      collection: 'users'
    })
  
  module.exports = mongoose.model('User', userSchema)