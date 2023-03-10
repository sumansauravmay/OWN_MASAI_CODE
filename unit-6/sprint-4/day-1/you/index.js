const express=require('express')
const {connection}=require("./config/db")
const {UserModel}=require("./models/User.model")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.post("/register",async (req,res)=>{
const {email,pass,name,age}=req.body;
try{
    const user=new UserModel({email,pass,name,age});
        await user.save();
        res.send("Registered");
}
catch(err){
    res.send("err while doing registration")
res.send(err)
}
})

app.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    try{
        const user=await UserModel.find({email,pass})
        const token = jwt.sign({ course: 'backend' }, 'masai');
        if(user.length>0)
        {
            res.send({"msg":"Login successful","token":token})
            console.log(user)
        }
        else{
            res.send("Wrong credential!!")
        }            
        
    }
    catch(err){
        res.send(err)
    } 
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/data",(req,res)=>{
    const token=req.headers.authorization;
    console.log(token)

    jwt.verify(token, 'masai', function(err, decoded) {
   if(err)
   {
    res.send("Invalid token")
   }else{
    res.send("Data...")
   }
      });

})

app.get("/contact",(req,res)=>{
    res.send("contact")
})

app.get("/cart",(req,res)=>{
    const token=req.query.token;

    jwt.verify(token, 'masai', function(err, decoded) {
   if(err)
   {
    res.send("Invalid token")
    console.log(err)
   }else{
    res.send("Cart...")
   }
      });
})


app.listen(3500,async()=>{
    try{
await connection;
console.log("port is running on 3500")
    }
    catch(err){
        console.log("error while connectiog to mongo")
        console.log(err)
    }
    
})




