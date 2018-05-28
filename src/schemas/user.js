var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    nickname: {
        type: String
    },
    bio: {
        type: String
    },
    avatar: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = User;