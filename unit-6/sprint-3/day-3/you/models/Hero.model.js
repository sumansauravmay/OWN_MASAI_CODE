const mongoose=require("mongoose")
//not a constructor function
const heroSchema=mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villain:String,
    language:String,
    is_active:Boolean
 })
 //constructior function
 const HeroModel=mongoose.model("hero",heroSchema)


module.exports={
    HeroModel
}

