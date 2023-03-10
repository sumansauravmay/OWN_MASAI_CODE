const express=require("express")
const {BookModel}=require("../models/Books.models")
const Validator=require("../middlewares/validator")
const Record=require("../middlewares/record")
const bookRouter=express.Router()

bookRouter.get("/",async(req,res)=>{
    const query=req.query
    try{
        const bookes=await BookModel.find(query)
        res.send(bookes)
    }
    catch(err){
       console.log(err)
    }
})

bookRouter.post("/add",Validator,async(req,res)=>{
    const data=req.body;
    try{
        const bookadd=new BookModel(data)
        await bookadd.save()
        res.send("Add new book data")
    }
   catch(err){
    console.log(err)
   }
})

bookRouter.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
await BookModel.findByIdAndUpdate({_id:ID},payload)
res.send(`update the data of books whose id is ${ID}`)
    }
    catch(err){
        console.log(err)
    }
})

bookRouter.delete("/delete/:id",Record,async(req,res)=>{
    const ID=req.params.id;
    try{
await BookModel.findByIdAndDelete({_id:ID})
res.send(`Deleted the bbok data whose id is ${ID}`)
    }
    catch(err){
        console.log(err)
    }
})


module.exports={
    bookRouter
}

