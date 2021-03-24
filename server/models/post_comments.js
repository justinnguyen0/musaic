const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let post_commentsSchema = new Schema({
  post_id: {
    type: String
  },
  user_id: {
    type: String
  },
  comment: {
    type: String
  },
  updated_at: { //possibly change to a date data type?
    type: String
  }
}, {
    collection: 'post_comments'
  })

module.exports = mongoose.model('Post Comments', userSchema)