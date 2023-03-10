const http=require("http")

const fs=require("fs")

const ipAddress = require("node:dns");

const array=["Nrupul","Yogesh","Pratik","Suman Saurav"]


var cowsay = require("cowsay");

// const cowlist=cowsay.say({
//     text : "Employees name is as follows :\nAman\nAlbert\nVarun\nRajat\nNrupul\n",

// })

const server=http.createServer((req,res)=>{
    //1st

    if(req.url==="/")
    {
        res.setHeader("Content-type","text/html")
        res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>")
    }
    //2nd
    else if(req.url==="/writeinfile")
    {
      fs.writeFile("./employee.txt","<h1>Employee names are as follows:<h1>",(err,data)=>{
if(err){
    console.log("something went wrong")
}
else{
    res.setHeader("Content-type","text/html")
    res.end(data)
}
      })  
    }
//3rd
    else if(req.url==="/enternames")
    {
    array.map((el)=>(
        fs.appendFile("./employee.txt",`\n${el}`,(err)=>{
            if(err)
            {
                res.end("there is some error while loading employee!!")
            }
            else{
                res.setHeader("Content-type","text/html")
                res.end("<h1>All the name added in the file</h1>")
            }
        })
    ))
    }

// 4th
    else if(req.url==="/alldetails")
    {
        // fs.writeFileSync("./employee.txt",cowlist,(err,data)=>{
        //     if(err){
        //         console.log("something went wrong")
        //     }
        //     else{
        //         res.setHeader("Content-type","text/html")
        //         res.end(data)
        //     }
        //           })  
        fs.readFile("./employee.txt","utf-8",(err,data)=>{
         if(err)
         {
            res.end("unable to load cow list")
         }
         else{
            res.end(cowsay.say({
                text:data
            }))
         }
        })
    }
// 5th
else if(req.url==="/address")
    {
        ipAddress.lookup("masaischool.com",(err, address) => {
           if(err){
            console.log(err)
           }
           else{
            res.end(`The IP Address is ${address}`)
           }
          });
    }

// 6th
else if(req.url==="/delete")
{
    fs.unlink("./employee.txt" , (err,data) => {
        if (err) {
          console.log("somthing error there");
          console.log(err);
        }
        else{

            res.end("data is deleted!!");
        }
       
      });
}

})




server.listen(4500,()=>{
    console.log("Welcome to 4500 port")
})



