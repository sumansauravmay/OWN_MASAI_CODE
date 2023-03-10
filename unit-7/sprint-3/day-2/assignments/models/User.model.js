const mongoose=require("mongoose")

//not a constructor function
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
 })
 //constructior function
 const UserModel=mongoose.model("user",userSchema)
 
 
 module.exports={
     UserModel
 };

// "id":1,
//  "name":"suman",
//     "email":"suman@gmail.com",
//     "password":"suman123"



    // {
    //   "_id": "63f71d3ca424011891217eeb",
    //   "name": "suman",
    //   "email": "suman@gmail.com",
    //   "password": "suman123",
    //   "__v": 0
    // }
  