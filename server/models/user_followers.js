const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user_followersSchema = new Schema({
  user_id: {
    type: String
  },
  follower_id: {
    type: String
  }
}, {
    collection: 'user_followers'
  })

module.exports = mongoose.model('User Followers', userSchema)