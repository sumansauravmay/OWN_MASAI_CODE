const express=require("express");

const studentRouter=express.Router();

studentRouter.get("/",(req,res)=>{
    res.json({
        name:"Omesh",
        city:"Lucknow"
    })
})


studentRouter.post("/addstudent",(req,res)=>{
    console.log(req.body)
    res.send("Added student")
})

module.exports={studentRouter}




