
const express=require("express");
require('dotenv').config()
const {connection}=require("./config/db")
const {heroRouter}=require("./routes/Hero.route")
const {villainRouter}=require("./routes/Villain.route")
const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wecome to home page");
})

app.use("/heroes",heroRouter)
app.use("/villain",villainRouter)

app.listen(process.env.port,async()=>{
  try{
    await connection
    console.log(`Port is runnng on ${process.env.port} port`)
    console.log("Connected to mongoDB")
  }
  catch(err){
    console.log("Error while connecting to DB")
    console.log(err)
  }
  
})

