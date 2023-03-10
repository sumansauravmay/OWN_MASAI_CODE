const {Router}=require("express")

const teachers=Router();


teachers.post("/post",(req,res)=>{
    res.send("Teacher Post")
})

teachers.put("/update",(req,res)=>{
    res.send("Teacher Update")
})

teachers.delete("/delete",(req,res)=>{
    res.send("Teacher Delete")
})

teachers.get("/get",(req,res)=>{
    res.send("Teacher Get")
})

module.exports=teachers;




