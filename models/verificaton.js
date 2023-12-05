const mongoose = require('mongoose')

const email_verification = mongoose.Schema({
    user_id : String,
    user_unique_key : String,
    date_created : Date,
    expiry_date : Date
 })

 module.exports = mongoose.model("verification", email_verification)