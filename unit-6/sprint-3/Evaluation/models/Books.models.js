
const mongoose=require("mongoose")


bookSchema=mongoose.Schema({
    title : String,
    genre : String,
    price : Number,
    author : String
})


const BookModel=mongoose.model("book",bookSchema)

module.exports={
    BookModel
}