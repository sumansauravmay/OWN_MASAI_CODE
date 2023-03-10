const express=require("express")

const {connection}=require("./config/db");
const { UserModel } = require("./models/User.model");
const {FlightModel}=require("./models/Flight.model");
const {BookingModel}=require("./models/Booking.model");

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})

app.post("/register",async(req,res)=>{
    let data=req.body;
        const user=new UserModel(data)
        await user.save()
        res.send("post succesfully")
    
})

app.post("/login",async(req,res)=>{
    const query=req.query
    try{
        let user=await UserModel.find(query)
        res.send(user)
    }
    catch(err){
        console.log(err)
    }

})

app.get("/flights",async(req,res)=>{
   let query=req.query;
   try{
    const flight=await FlightModel.find(query)
    res.send(flight)
   }
   catch(err){
    res.send(err)
   }
})


app.get("/flights/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
       const data= await FlightModel.findById({_id:ID},payload);
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})


app.post("/flights",async(req,res)=>{
    let data=req.body;
        const flight=new FlightModel(data)
        await flight.save()
        res.send("flight posted succesfully")   
})

app.patch("/flights/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
        await FlightModel.findByIdAndUpdate({_id:ID},payload);
        res.send("updated")
    }
    catch(err){
        res.send(err)
    }
})

app.delete("/flights/:id",async(req,res)=>{
    const ID=req.params.id;
    try{
        await FlightModel.findByIdAndDelete({_id:ID})
        res.send("Deleted successfully")
    }
    catch(err){
        console.log(err)
    }
})


app.get("/dashboard",async(req,res)=>{
    const query=req.query
    try{
        const dashboard=await BookingModel.find(query)
        res.send(dashboard)
    }
    catch(err){
        console.log(err)
    }
   
})

// app.post("/booking",async(req,res)=>{
//     let data=req.body;
//         const book=new BookingModel(data)
//         await book.save()
//         res.send("flight booked")   
// })
app.listen(4500,async()=>{
    try{
        await connection
        console.log("Port is running on port 4500")
    }
catch(err){
    console.log("err")
}
})