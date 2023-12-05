const nodemailer = require('nodemailer')


exports.verify_mail = async (email, link) => {
    try{
       const transpoter = nodemailer.createTransport({
        service : "Gmail",
        auth : {
            user : process.env.EMAIL || "deramodili@gmail.com",
            pass : process.env.PASS || "wpyp ypbf pqwb akap"
        }
        
       })
       let info = await transpoter.sendMail({
        from : "buddha",
        to : email,
        subject : "account verifivation ",
        text : 'verifiy your mail ',
        html : ` <div>
        <a href= ${link}>click on the link to verify your account  </a>
        </div>    `

       } )
    }catch (err){
        console.log(err)
        console.log("mail failed to send")
    }
} 

