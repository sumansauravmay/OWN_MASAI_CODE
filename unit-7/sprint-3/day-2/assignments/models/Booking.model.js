const mongoose=require("mongoose")

//not a constructor function
const bookingSchema=mongoose.Schema({
    user : { type: String, ref:String  },
    flight : { type: String, ref: String }
 })
 //constructior function
 const BookingModel=mongoose.model("book",bookingSchema)
 
 
 module.exports={
    BookingModel
 };

//  "id":1,
//   "user" : { "type":"63f71d3ca424011891217eeb","ref":'suman' },
//     "flight" : { "type": 63f71e3847b05c1df8a75bf3, "ref": "air infgis" }
