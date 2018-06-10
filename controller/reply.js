var ReplyModel = require('../src/models/reply');
var mongoose = require('mongoose');

class Reply {
    constructor() {}

    getReplyFromTopic(req, res, next) {
        ReplyModel.find({'fromTopic': req.query.id},
            (err, replyInfo) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(replyInfo);
                }
            })
    };

    addReply(req, res, next) {
        let newItem = req.body;
        ReplyModel.create(newItem, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(newItem);
                ReplyModel.find({'fromTopic': newItem.fromTopic},
                    (err, replyList) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(replyList);
                        }
                    })
            }
        })
    }
}

module.exports = Reply;