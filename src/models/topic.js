var mongoose = require('mongoose');
var TopicSchema = require('../schemas/topic');
var TopicModel = mongoose.model('Topic', TopicSchema, 'topic');

module.exports = TopicModel;