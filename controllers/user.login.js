const User = require('../models/user.model');

const _ = require("lodash")
const joiValidation = require('../validator/user.validation')

exports.login = async (req, res, next) => {
    _.pick(req.body, ["email", "password"])
    const verify_user = await User.findOne({ email: req.body.email})
    const verify_password = await User.findOne({ password : req.body.password })
    const account = await User.findOne( verify_user )
    const verified_account = await User.findOne({_id : account._id})
    if(!verified_account) {
        res.send("not a user")
    }
    console.log(account)
   
        try { if(!verify_user) {
        res.send("email is not available")
        return
    }else if(verify_user && !verify_password) {
        res.send("incorrect password")
        return
    }if(account.verified === false) {
                 res.send("please verify your account first a mail was sent to you")
                return
            }
            else{
            res.send("login successful")}
        }catch(e) {console.log(e)
        
    
}
}