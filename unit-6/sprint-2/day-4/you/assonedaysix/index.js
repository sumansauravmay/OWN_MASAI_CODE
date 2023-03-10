const express=require("express")
const fs=require("fs")

const app=express();


app.use(express.json())

const timeLogger=(req,res,next)=>{
    const startTime=new Date().getTime();
    next()
    const endTime=new Date().getTime();
console.log(endTime-startTime)
}

app.use(timeLogger)


app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.post("/",(req,res)=>{
   const data=fs.readFileSync("./db.json","utf-8")
const parse_data=JSON.parse(data)
parse_data.movie.push(req.body)
fs.writeFileSync("./db.json",JSON.stringify(parse_data))
res.send("Movie posted successfully")

})

app.listen(3500,()=>{
    console.log("port on 3500")
})