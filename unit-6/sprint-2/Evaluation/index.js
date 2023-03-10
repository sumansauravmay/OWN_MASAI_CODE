const express=require("express")
const fs=require("fs")
const {validator}=require("./middleware/validator")
const app=express();
app.use(express.json())

//get student
app.get("/students",(req,res)=>{
const data=fs.readFileSync("./db.json","utf-8")
const parse_data=JSON.parse(data);
res.send(parse_data.students)
})
//get student by roll
app.get("/students/:roll_no",(req,res)=>{
    const roll_no=req.params.roll_no;
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data);
    const newData=parse_data.students.filter((el)=>el.roll_no==roll_no)
    parse_data.students=newData;
    res.send(parse_data.students)
    })

//get teacher
app.get("/teachers",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data);
    res.send(parse_data.teachers)
    })
//get teacher by emp_id
    app.get("/teachers/:emp_id",(req,res)=>{
        const emp_id=req.params.emp_id;
        const data=fs.readFileSync("./db.json","utf-8")
        const parse_data=JSON.parse(data);
        const newData=parse_data.teachers.filter((el)=>el.emp_id==emp_id)
        parse_data.teachers=newData;
        res.send(parse_data.teachers)
        })

//post student
app.post("/students/addstudent",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data)
parse_data.students.push(req.body)

fs.writeFileSync("./db.json",JSON.stringify(parse_data))

res.send("student data posted")

})

//post teacher
app.post("/teachers/addteacher",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data)
parse_data.teachers.push(req.body)

fs.writeFileSync("./db.json",JSON.stringify(parse_data))

res.send("teacher data posted")

})
//delete student
app.delete("/students/:roll_no",validator,(req,res)=>{
    const roll_no=req.params.roll_no;
    const data=fs.readFileSync("./db.json","utf-8")
    const parse_data=JSON.parse(data)
    const newData=parse_data.students.filter((el)=>el.roll_no!=roll_no)
    parse_data.students=newData;
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    res.send("student data is delted")
})
//put/patch
app.patch("/students/:roll_no",validator,(req,res)=>{
    const ID = Number(req.params.roll_no);
  const payload = req.body;
  const data = fs.readFileSync("./db.json", "utf-8");
  const parsed_data = JSON.parse(data);

  const filter = parsed_data.students.map((ele) => {
    if (ele.roll_no === ID) {
      return payload;
    } else {
      return ele;
    }
  });
  parsed_data.students = filter;
  fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
  res.send("data has patched");

    // for(let i=0;i<parse_data.students.length;i++)
    // {
    //     if(parse_data.students[i].roll_no==roll_no)
    //     {
    //         parse_data.students[i]=req.body
    //     }
    // }
    // const filter = parse_data.students.map((ele) => {
    //     if (ele.roll_no == roll_no) {
    //       return req.body;
    //     } else {
    //       return ele;
    //     }
    //   });
    //   parse_data.students=filter;

    // fs.writeFileSync("./db.json",JSON.stringify(parse_data),"utf-8")
    // res.send("data has patched")
})


    app.listen(3500,()=>{
        console.log("port on 3500")
    })







