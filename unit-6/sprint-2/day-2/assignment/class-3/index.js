const express=require("express")
const {studentRouter}=require("./routes/student.router")
const {teacherRouter}=require("./routes/teacher.router")
const cors=require("cors")

const app=express();
app.use(express.json())
//School Management system

app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home page")
})





app.listen(3500,()=>{
    console.log("port on 3500")
})












