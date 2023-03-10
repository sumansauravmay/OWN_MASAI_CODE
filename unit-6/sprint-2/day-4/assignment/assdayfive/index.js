const express=require("express")

const fs=require("fs")

const app=express();

app.use(express.json())


app.get("/",(req,res)=>{

const data=fs.readFileSync("./db.json","utf-8")
const parse_data=JSON.parse(data)
console.log(parse_data)

res.send(parse_data)

})

app.post("/",(req,res)=>{

   const data=fs.readFileSync("./db.json","utf-8")
   const parse_data2=JSON.parse(data);
   parse_data2.todoData.push(req.body)
   fs.writeFileSync("./db.json",JSON.stringify(parse_data2))
   console.log(parse_data2)
//    res.send(parse_data)

})

app.put("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    const parse_data=JSON.parse(data);
    for(let i=0;i<parse_data.todoData.length;i++){
        if(parse_data.todoData[i].id===req.body.id){
            parse_data.todoData[i]=req.body;
        }
    }
    console.log(parse_data);
    fs.writeFileSync("./db.json",JSON.stringify(parse_data));
    res.send("data is put")
    

})
app.delete("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    //parse
    const parse_data=JSON.parse(data);
    console.log(parse_data);
    //filter
    const newdata=parse_data.todoData.filter((el)=>el.id!==req.body.id);
    parse_data.todoData=newdata;
    console.log(newdata)
    //write and stringyffy
    fs.writeFileSync("./db.json",JSON.stringify(parse_data));
    res.send("data is deleted");

 })



app.listen(3500,()=>{
    console.log("Port on 3500")
})


