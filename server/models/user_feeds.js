const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user_feedsSchema = new Schema({
  user_id: {
    type: String
  },
  post_id: {
    type: String
  }
}, {
    collection: 'user_feeds'
  })

module.exports = mongoose.model('User Feeds', user_feedsSchema)