const mongoose=require("mongoose")

//not a constructor function
const villainSchema=mongoose.Schema({
    name:String,
    power:Number
    
 })
 //constructior function
 const VillainModel=mongoose.model("villain",villainSchema)

module.exports={
    VillainModel
}

