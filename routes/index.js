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

// get all topic
/*router.get('/getAllTopic', (req, res, next) => {
    Topic.find({}).sort({'publishDate': -1}).exec((err, topicList) => {
        if (err) {
            console.log(err);
        } else {
            res.json(topicList);
        }
    })
});*/
// add topic
/*router.post('/addTopic', (req, res, next) => {
    let newItem = req.body;
    Topic.create(newItem, (err) => {
        if (err) {
            console.log(err);
        } else {
            Topic.find({}, (err, topicList) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(topicList);
                }
            })
        }
    })
});*/
//login
/*router.post('/login', (req, res, next) => {
    console.log(req.body);
    let loginInfo = req.body;
    User.findOne({'username': loginInfo.username, 'password': loginInfo.password},
        (err, doc) => {
            if (err) {
                console.log("error" + err);
            } else {
                console.log(doc);
            }
        }
    );
});*/

module.exports = router;
