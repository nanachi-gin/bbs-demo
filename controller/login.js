var express=require('express');
var UserModel = require('../src/models/user');

class Login {
    constructor() {}
    loginer(req, res, next) {
        console.log(req.body);
        let loginInfo = req.body;
        UserModel.findOne({'username': loginInfo.username, 'password': loginInfo.password},
            (err, doc) => {
                if (err) {
                    console.log("findOne err" + err);
                } else {
                    let resData = {
                        _id: doc._id,
                        username: doc.username,
                        nickname: doc.nickname,
                        bio: doc.bio,
                        avatar: doc.avatar
                    };
                    req.session.isLogin = 1;
                    req.session.user = resData;
                    res.json(resData);
                }
            }
        );
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
            userInfo: null
        };
        if (req.session.isLogin === 1) {
            resData.isLogin = 1;
            resData.userInfo = req.session.user;
        } else {}
        res.json(resData);
    }
}

module.exports = Login;