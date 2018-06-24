var express=require('express');
var UserModel = require('../src/models/user');
var TopicModel = require('../src/models/topic');
var ReplyModel = require('../src/models/reply');

class User {
    constructor() {}
    loginer(req, res, next) {
        let loginInfo = req.body;
        UserModel.findOne({'username': loginInfo.username, 'password': loginInfo.password},
            (err, doc) => {
                if (err) {
                    console.log("findOne err" + err);
                } else {
                    if (doc) {
                        let resData = {
                            _id: doc._id,
                            username: doc.username,
                            nickname: doc.nickname,
                            bio: doc.bio,
                            avatar: doc.avatar,
                            topic_num: 0,
                            reply_num: 0,
                        };
                        req.session.isLogin = 1;
                        req.session.user = resData;
                        res.json(resData);
                    } else {
                        console.log("用户名或密码错误");
                        res.send("用户名或密码错误");
                    }
                }
            }
        );
    }

    register(req, res, next) {
        let registerInfo = req.body;
        UserModel.findOne({'username': registerInfo.username},
            (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    if (!doc) {
                        UserModel.create(registerInfo, (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("注册成功");
                                let resData = {
                                    _id: registerInfo._id,
                                    username: registerInfo.username,
                                    nickname: registerInfo.nickname,
                                    bio: registerInfo.bio,
                                    avatar: registerInfo.avatar,
                                    topic_num: 0,
                                    reply_num: 0
                                };
                                req.session.isLogin = 1;
                                req.session.user = resData;
                                res.json(resData);
                            }
                        })
                    } else {
                        console.log("用户已存在");
                        res.send("用户已存在");
                    }
                }
            })
    }

    logout(req, res, next) {
        res.clearCookie('sessionId');
        req.session.isLogin = 0;
        req.session.user = null;
        res.send('用户注销');
    }


    getUserInfo(req, res, next) {
        let resData = {
            isLogin: 0,
            userInfo: null,
        };
        if (req.session.isLogin === 1) {
            resData.isLogin = 1;
            resData.userInfo = req.session.user;
        }
        console.log(resData);
        res.json(resData);
    }
}

module.exports = User;