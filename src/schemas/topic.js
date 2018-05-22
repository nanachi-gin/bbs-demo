var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Topic = new Schema({
    title: {
      type: String,
      default: 'test'
    },
    state: {
      type: Number,
      default: 1
    },
    content: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false});

module.exports = Topic;