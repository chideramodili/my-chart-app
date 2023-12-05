// require("dotenv").config()
const User = require('../models/user.model');
const crypto = require('crypto');
const _ = require("lodash")
const joiValidation = require('../validator/user.validation')
const nodemailer = require("nodemailer");
const uuid = require('uuid')
const Token = require("../models/token");
const token = require('../models/token');
const {verify_mail} = require("../utils")



//  to require the user verification model 
     uers_verification = require("../models/verificaton")

     

     //implementing nodemailer

    //testing the nodemailes massage

//TO CREATE A NEW USER 
exports.createUser = async (req, res, next) => {

    const {error, validate} = joiValidation.validate(req.body)
    if(error){
        console.log(error.message)
        return res.send(error.message)
    }


const user = new User(
    _.pick(req.body, [
        "username","firstname","lastname","email","phonenumber","password","confirm_password", "middlename", "age"
    ]),
    // {email_token : crypto.randomBytes(30).toString("hex") }
    
)

try {
    if(req.body.password != req.body.confirm_password){
        return res.send("cross check both password again please")
       
    }
    const avil_email = await User.findOne({email:req.body.email})
    if(avil_email){
        res.send("email already exist")
        return
    }
 

    // MASSAGE TO BE SENT TO THE REGISTERED USER

    const newUser = 
    await user.save()
    // res.send("account created successfully see account details below" + newUser)

   const new_token = new Token({
    userId : user._id,
    token : crypto.randomBytes(255).toString("hex")
   })
    const token = await new_token.save()
    console.log(token)
    const link = `http://localhost:3000/users/verify_account/${token.token}`
    await verify_mail(user.email, link)
    
    res.send('mail sent successfully')
 
} catch (err) {
    console.log(err.message)
    res.send(err.message)
}



}


