var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Reply = new Schema({
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
    },
    byUserId: {
        type: String
    },
    byUserNickname: {
        type: String
    }
}, { versionKey: false});

module.exports = Reply;