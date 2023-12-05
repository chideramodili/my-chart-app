const User = require('../models/user.model');

const _ = require("lodash")
const joiValidation = require('../validator/user.validation')

exports.login = async (req, res, next) => {
    _.pick(req.body, ["email", "password"])
    const verify_user = await User.findOne({ email: req.body.email})
    const verify_password = await User.findOne({ password : req.body.password })
    if(!verify_user) {
        res.send("email is not available")
    }else if(verify_user && !verify_password) {
        res.send("incorrect password")
    } else {
        res.send("login successful")
    }
}