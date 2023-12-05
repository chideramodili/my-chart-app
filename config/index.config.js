require("dotenv").config();
const mongoose = require('mongoose')


    //THE FUNCTION TO CONNECT TO A DATABASE
   
        const database = () => {
            try {
                // mongoose.connect("mongodb+srv://dandelion:dandilion@cluster0.myzji2j.mongodb.net/")
                // .then(() => console.log('Connected!'));

        mongoose.connect(process.env.DATA_BASE)
        .then(console.log('Connected!'))
        .catch((err) => console.log(err));
        
    }
    catch (err) {
        console.log(err.massage)
    }
   
    }
    
    module.exports = database()




   