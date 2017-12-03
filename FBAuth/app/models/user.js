var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
//		gender: String,
//        birthday: String
    }
});


module.exports = mongoose.model('User', UserSchema);