const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
    name: String,
    description : String,
    category : String,
    image : String,
    location :String,
    postedAt : Date,
    price : Number
})


const ProductModel=mongoose.model("products",productSchema)

module.exports={ProductModel}