const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
const connection=mongoose.connect("mongodb://127.0.0.1:27017/userdata")
//not a constructor function


module.exports={
    connection
};