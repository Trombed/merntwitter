const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserShema = new Schema({
    hande; {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: P{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema)