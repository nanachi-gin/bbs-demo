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
    fromTopic: {
        type: String
    },
    byUserId: {
        type: String
    },
    byUserNickname: {
        type: String
    },
    byUserAvatar: {
        type: String
    },
    floor: {
        type: Number
    }
}, { versionKey: false});

module.exports = Reply;