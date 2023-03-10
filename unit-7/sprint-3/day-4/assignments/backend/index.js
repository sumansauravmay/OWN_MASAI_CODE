const express=require('express')
const {connection}=require("./config/db")

const {prodRouter}=require("./routes/Prod.routes")
// const {authenticate}=require("./middlewares/authenticate.middleware")
const cors=require("cors");

const app=express()

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.use("/data",prodRouter)

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
