const mongoose=require("mongoose")
require('dotenv').config()

mongoose.set('strictQuery', false)
// mongodb://127.0.0.1:27017/superheroDB
const connection=mongoose.connect(process.env.mongoURL)




module.exports={
    connection  
};



