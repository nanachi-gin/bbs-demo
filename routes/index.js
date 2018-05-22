var express = require('express');
var router = express.Router();
var Topic = require('../src/models/topic');
/*

var test = new Topic({
    content: 'sad'
});
test.save(function (err, doc) {
    if (err) {
        console.log(err);
    }

    console.log('success' + doc);
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BBS' });
});


// get all topic
router.get('/getAllTopic', (req, res, next) => {
    Topic.find({}).sort({'publishDate': -1}).exec((err, topicList) => {
        if (err) {
            console.log(err);
        } else {
            res.json(topicList);
        }
    })
});


// add topic
router.post('/addTopic', (req, res, next) => {
    /*let newItem = new Topic(req.body);
    console.log(newItem);
    newItem.save(function (err, doc) {
        if (err) {
            console.log(err);
        }

        console.log('success' + doc);
    });*/
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
});

module.exports = router;
