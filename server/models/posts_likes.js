const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let posts_likesSchema = new Schema({
  post_id: {
    type: String
  },
  user_id: {
    type: String
  }
}, {
    collection: 'post_likes'
  })

module.exports = mongoose.model('Post Likes', userSchema)