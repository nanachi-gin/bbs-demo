var express = require('express');
var router = express.Router();
var User = require('../controller/user');
var user = new User;
var Topic = require('../controller/topic');
var topic = new Topic;
var Reply = require('../controller/reply');
var reply = new Reply;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BBS' });
});

router.get('/getAllTopic', topic.getAllTopic);
router.post('/addTopic', topic.addTopic);
router.get('/getTopicDetail', topic.getTopicDetail);

router.post('/login', user.loginer);
router.get('/logout', user.logout);
router.post('/register', user.register);
router.get('/getUserInfo', user.getUserInfo);

router.post('/addReply', reply.addReply);
router.get('/getReplyFromTopic', reply.getReplyFromTopic);


module.exports = router;
