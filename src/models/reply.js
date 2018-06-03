var mongoose = require('mongoose');
var ReplySchema = require('../schemas/reply');
var ReplyModel = mongoose.model('Reply', ReplySchema, 'reply');

module.exports = ReplyModel;