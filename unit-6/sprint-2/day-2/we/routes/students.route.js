const {Router}=require("express")

const students=Router();

students.post("/post",(req,res)=>{
    res.send("Student Post")
})

students.put("/update",(req,res)=>{
    res.send("Student Update")
})

students.delete("/delete",(req,res)=>{
    res.send("Student Delete")
})

students.get("/get",(req,res)=>{
    res.send("Student Get")
})

module.exports=students;


