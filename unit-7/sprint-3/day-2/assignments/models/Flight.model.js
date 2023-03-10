const mongoose=require("mongoose")

//not a constructor function
const flightSchema=mongoose.Schema({
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
 })
 //constructior function
 const FlightModel=mongoose.model("flight",flightSchema)
 
 
 module.exports={
     FlightModel
 };


// "id":1,
//  "airline": "air infgis",
//   "flightNo": "djfdk",
//   "departure": "ddfhskdj",
//   "arrival": "ddfhskdj",
//   "departureTime": 20,
//   "arrivalTime": 23,
//   "seats": 29,
//   "price": 1234
