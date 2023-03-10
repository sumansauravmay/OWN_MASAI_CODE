const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/superheroDB")
//not a constructor function
const heroSchema=mongoose.Schema({
    adult:{type:Boolean},
    backdrop_path:{type:String},
    genre_ids:{type:Array(Number),required:true},
    id:{type:Number,required:true},
    media_type:{String,required:false},
    original_language:{type:String,required:true},
    original_title:{type:String,required:true},
    overview:{type:String,required:true},
    popularity:{type:Number},
    release_date:{type:Date},
    poster_path:{type:String},
    title:{type:String,required:true},
    video:{type:Boolean,required:true},
    vote_average:{type:Number,required:true},
    vote_count:{type:Number,required:true},
})
//constructior function
const HeroModel=mongoose.model("hero",heroSchema)


module.exports={
    connection,
    heroSchema,
    HeroModel
};



