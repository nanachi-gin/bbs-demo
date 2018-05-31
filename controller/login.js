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
                    console.log(doc);
                    res.json(doc);
                }
            }
        );
    }
}

module.exports = Login;