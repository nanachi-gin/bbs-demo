var mongoose = requie('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: Number,
        default: 1
    }
});
