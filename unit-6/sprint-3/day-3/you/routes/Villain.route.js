const express=require("express");

const {VillainModel}=require("../models/Villain.model")

const villainRouter=express.Router()


villainRouter.get("/",async (req,res)=>{
    let query=req.query;
    
    try{
        const villain=await VillainModel.find(query)
        res.send(villain)
    }
    catch(err){
console.log(err)
console.log("err: something went wrong")
}
    // const language=req.query.language
    // const power=req.query.power
    // const heroes=await HeroModel.find({language:language,power:power})
    // const heroes=await HeroModel.find(query)
    // const heroes=await HeroModel.find({language:"French"})
    // res.send(heroes);
})

villainRouter.post("/add",async (req,res)=>{
    const data=req.body;
    try{
        const villain=new VillainModel(data);
        await villain.save();
        console.log(villain);
        res.send("Added the villain")
    }
    catch(err){
        console.log({"err":"Somethng went wrong"})
console.log(err)
    }   
})

module.exports={
    villainRouter
}
