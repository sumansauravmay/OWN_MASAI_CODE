const express=require("express")
const {connection}=require("./config/db")
const {bookRouter}=require("./routes/Book.route")

require("dotenv").config()
const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to Book data")
})

app.use("/books",bookRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection;
console.log("Port is runnig on 3500")
    }
    catch(err){
console.log(err)
    }
})



