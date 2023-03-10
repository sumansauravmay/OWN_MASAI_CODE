const express=require("express")
const {ProductModel}=require("../models/Prod.model")
const prodRouter=express.Router()


prodRouter.post("/newprod",async(req,res)=>{
    const data=req.body;
    try{
        const product=new ProductModel(data)
        await product.save()
        res.send("Added product")
    }
    catch(err){
        console.log(err)
    }
})

prodRouter.get("/proddata",async(req,res)=>{
    // let query=req.query;
    try{
        const productall=await ProductModel.find()
        res.send(productall)
    }
    catch(err){
        res.send(err)
    }
})



module.exports={
    prodRouter
}