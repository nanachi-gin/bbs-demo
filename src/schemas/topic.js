var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Topic = new Schema({
    title: {
        type: String,
        default: '无标题'
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
    },
    byUserId: {
        type: String
    },
    byUserNickname: {
        type: String
    },
    byUserAvatar: {
        type: String
    }
}, { versionKey: false});

module.exports = Topic;