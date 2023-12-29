const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength:30,
        unique: true,
    },
    email: {
        type: String,
        required: true,
         maxlength: 35,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
