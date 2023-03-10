const express=require("express");
const {HeroModel}=require("../models/Hero.model")

const heroRouter=express.Router()

heroRouter.get("/",async (req,res)=>{
    let query=req.query;
    
    try{
        const heroes=await HeroModel.find(query)
        res.send(heroes)
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

heroRouter.post("/add",async (req,res)=>{
    const data=req.body;
    try{
        const hero=new HeroModel(data);
        await hero.save();
        console.log(hero);
        res.send("Added the hero")
    }
    catch(err){
        console.log({"err":"Somethng went wrong"})
console.log(err)
    }   
})

heroRouter.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
try{
await HeroModel.findByIdAndUpdate({_id:ID},payload);
res.send(`update the hero data whose id is ${ID}`);
}
catch(err){
    console.log(err);
    console.log({"err":err});
}
})

heroRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id;
try{
await HeroModel.findByIdAndDelete({_id:ID});
res.send(`Deleted the hero data whose id is ${ID}`);
}
catch(err){
    console.log(err)
    console.log({"err":err})
}
})



module.exports={
    heroRouter
}


