var TopicModel = require('../src/models/topic');

class Topic {
    constructor() {}
    getAllTopic(req, res, next) {
        TopicModel.find({}).sort({'publishDate': -1}).exec((err, topicList) => {
            if (err) {
                console.log(err);
            } else {
                res.json(topicList);
            }
        })
    }

    addTopic(req, res, next) {
        let newItem = req.body;
        TopicModel.create(newItem, (err) => {
            if (err) {
                console.log(err);
            } else {
                TopicModel.find({}, (err, topicList) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(topicList);
                    }
                })
            }
        })
    }
}

module.exports = Topic;