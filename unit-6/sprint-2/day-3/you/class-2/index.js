const express=require("express")

const cors=require("cors")

const app=express();
app.use(express.json())

app.use(cors({
    origin:""
}))

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/data",(req,res)=>{
    // console.log(req.query)
    // res.send("Data will be here")
    const data={
        bangalore:"25C",
        mumbai:"20C",
        delhi:"4C"
    }
    const {city}=req.query
console.log(city);
res.send(`Temperature in ${city} is ${data[city]}`)
})

app.get("/students/:roll",(req,res)=>{
    const roll=req.params.roll;
    res.send(`Data of the student with roll number ${roll}`)
})

app.listen(3500,()=>{
    console.log("port on 3500")
})













