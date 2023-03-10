const express=require("express")
const teachersRoutes=require("./routes/teachers.route")

const studentsRoutes=require("./routes/students.route")

const app=express();

// app.use("/teachers",teachersRoutes)
// app.use("/students",studentsRoutes)

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req,res,next)=>{
if(!req.query.apikey){
    return res.status(401).send("No API key provided");
}
next();
})



app.get("/",(req,res)=>{
    res.send("Hello");
})



app.listen(8080,()=>{
    console.log("port on 8080")
})







