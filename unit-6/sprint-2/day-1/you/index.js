const express=require("express");

const app=express()
// console.log(express)
const fs=require("fs")

app.use(express.json());//middleware


app.get("/",(req,res)=>{
res.end("hello World!!")
})

app.get("/data",(req,res)=>{
    res.send("data printed!!")
    })

// app.post("/addData",(req,res)=>{
//     console.log(req.body);
//     res.end("data posted!!");
// })

app.get("/alldata",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data)
    console.log(parsed_data);
    //  res.send(parsed_data)
    res.send("data from db.json")

})

app.get("/allstudents",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");//this data is in stringify. for use it we need to parse it.
    const parsed_data=JSON.parse(data)
    console.log(parsed_data.student)
    res.send("student data has been in the terminal!!")
})

app.post("/addstudent",(req,res)=>{
    //reading the data
    const data=fs.readFileSync("./db.json","utf-8");
    //parsing the data to add a new student
    const parsed_data=JSON.parse(data);
    //adding a new student
    parsed_data.student.push(req.body);
    //write it in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
// console.log(parsed_data);
res.send("database updated!!");

})

app.post("/addteacher",(req,res)=>{
    //reading the data
    const data=fs.readFileSync("./db.json","utf-8");
    //parsing the data to add a new student
    const parsed_data=JSON.parse(data);
    //adding a new student
    parsed_data.teacher.push(req.body);
    //write it in the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
// console.log(parsed_data);
res.send("database updated!!");

})



app.listen(3500,()=>{
    console.log("port on 3500")
})