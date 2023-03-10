const mongoose=require("mongoose")

const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/school")
        console.log("connected to mongo")
        // await Studentmodel.insertMany([{name:"Pawan",age:32,city:"Noida",is_married:false}])
    
    //        const student=new Studentmodel({
    //     name:"suman saurav",
    //     age:32,
    //     city:"Pune",
    //     is_married:true
    //    })
    //    await student.save();

console.log("Following is the database")
// const student=await Studentmodel.find()
const student=await Studentmodel.find({city:"Pune"})
console.log(student);

console.log("Added to the DB");
connection.disconnect();
console.log("disconnect to mongo");
    }
    catch{
console.log("Can't connect")
    }
}
main()

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    is_married:{type:Boolean,required:true}
},{
    versionKey:false
})
const Studentmodel=mongoose.model("student",studentSchema)

