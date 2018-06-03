var express = require('express');
var router = express.Router();
/*var Topic = require('../src/models/topic');*/
/*var User = require('../src/models/user');*/
var Login = require('../controller/login');
var login = new Login;
var Topic = require('../controller/topic');
var topic = new Topic;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BBS' });
});

router.get('/getAllTopic', topic.getAllTopic);
router.post('/addTopic', topic.addTopic);

router.post('/login', login.loginer);
router.get('/logout',login.logout);
router.get('/getUserInfo', login.getUserInfo);

module.exports = router;
