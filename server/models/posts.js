const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postsSchema = new Schema({
  user_id: {
    type: String
  },
  type: {
    type: String
  },
  total_likes: {
    type: Integer
  },
  total_comments: {
    type: Integer 
  }
}, {
    collection: 'posts'
  })

module.exports = mongoose.model('Posts', userSchema)