const express=require("express")
const {Notemodel}=require("../models/Note.model")
const noteRouter=express.Router();

noteRouter.get("/",(req,res)=>{
res.send("All the notes")
})

noteRouter.post("/create",async(req,res)=>{
    const payload=req.body;
    try{
const new_note=new Notemodel(payload)
await new_note.save();
res.send("Created the note")
    }
    catch(err){
        console.log(err)
    }
    })

    noteRouter.patch("/update/:id",async(req,res)=>{
       const payload=req.body;
       const ID=req.params.id;
       try{
await Notemodel.findByIdAndUpdate({_id:ID},payload)
res.send("updated the notes")
       }
       catch(err){
        console.log(err)
       }
        
        })

        noteRouter.delete("/delete/:id",async(req,res)=>{
            const ID=req.params.id;
            try{
await Notemodel.findByIdAndDelete({_id:ID})
res.send("deleted the notes")
            }
            catch(err){
                console.log(err);
            }
             res.send("Deleted the notes")
             })


             
module.exports={
    noteRouter
};


