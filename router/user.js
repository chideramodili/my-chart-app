const expresss =require('express')
const user_controller = require("../controllers/user.signup")
const login = require("../controllers/user.login")
const token = require ("../controllers/accoun_verification")


const router = expresss.Router()
//TO CREATE A NEW USER
router.post ("/", user_controller.createUser)

//TO GE ALL USER (FOR THE COMPANY ONLY)
router.get("/")

//TO GET A SINGLE USER(FOR THE COMPANY WORKERS ONLY)
router.get('/user')

//TO LONGIN TO YOUR ACCOUNT 
router.post("/login", login.login)

//ACCOUNT VERIFICATION ROUTE
router.get("/verify_account/:token", token.account_verification) 



module.exports = router