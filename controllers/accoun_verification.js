const Token = require ("../models/token")
const user = require ("../models/user.model")





exports.account_verification = async (req, res) => {
    
    
    try{
       const token = await Token.findOne({token: req.params.token})
       if(!token) return res.send("not a token")
        const verify = await user.updateOne({_id : token.userId},{$set: {verified : true}})
        await Token.findByIdAndDelete(token._id)
        res.send ('verification successful')
    }catch(e){
        res.send(e.message)
    }
}