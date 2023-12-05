const JOI = require ("joi")
//JOI INITIATION AND EPORTING
module.exports = userJoiValidation = JOI.object().keys({
    firstname: JOI.string().required().min(3).max(50),
    middlename: JOI.string().required().min(3).max(50),
    lastname: JOI.string().required().min(3).max(50),
    username: JOI.string().required().min(3).max(50),
    phonenumber:JOI.number().required().min(2),
    email : JOI.string().required().email().trim(),
    password : JOI.string().required(),
    confirm_password : JOI.string().required(),
    age: JOI.number().required()
})
