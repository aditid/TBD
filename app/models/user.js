var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        gender: String,
    }
});


module.exports = mongoose.model('User', UserSchema);