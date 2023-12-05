const mongoose = require('mongoose')

const Token = mongoose.Schema({
    userId: {
        required: true,
        type: String,
        ref: "user"
    },
    token: {
        required: true,
        type: String,

    }
})
module.exports = mongoose.model("token", Token)