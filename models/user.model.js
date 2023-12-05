const mongoose = require('mongoose')

const user_model = mongoose.Schema( {
    firstname :{
        required : true,
        type : String,
    },
    middlename :{
        type : String,
        required: true},
        lastname :{type : String, required: true},
        username :{type : String, required: true},
        
        age : {required : true,
    type: Number
 },
 email : {
    required: true,
    type: String
 },


phonenumber : {
    type :Number,
    required : true,
},
password : {
    type : String, 
    required : true,
},

confirm_password : {
    type : String,
    required : true
},
verified : {
    type : Boolean,
    default : false
},
date : {
type : Date,
default : Date.now()
}

}
 
)


module.exports = mongoose.model("user", user_model)