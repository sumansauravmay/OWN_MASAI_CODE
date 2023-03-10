const express=require("express")
const fs=require("fs")
const app=express();
// const {timeLogger}=require("./middlewares/timeLogger.middleware")
// const {watchMan}=require("./middlewares/watchMan.middleware")
const {logger}=require("./middlewares/logger.middleware")
const {addRoll}=require("./middlewares/addRoll.middleware")


// app.use(watchMan);//security check
// app.use(timeLogger);
app.use(logger)
//express.json() & express.text() are inbuild middle ware
// which middleware we create, that is custom middleware
app.use(express.json())//It parse the json data
app.use(express.text())//It parse the text
app.use(addRoll)

app.get("/",(req,res)=>{
    console.log("welcome page")
    res.send("Welcome")
})

app.get("/contacts",(req,res)=>{
    console.log("contact page")
    res.send("Contact page")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/data",(req,res)=>{
   const data=fs.readFileSync("./dummy.txt","utf-8")
//    console.log(data);
    res.send(data);
})

app.post("/newstudent",(req,res)=>{
    console.log(req.body);
    res.send("new student has been ended")
})



app.listen(3500,()=>{
    console.log("port on 3500")
})












