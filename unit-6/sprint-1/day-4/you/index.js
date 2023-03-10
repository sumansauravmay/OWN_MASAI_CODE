const http=require("http");
const fs=require("fs");

const server=http.createServer((request,response)=>{
    
if(request.url==="/")
{
    response.end("This is the home page created by Suman Saurav");
}

else if(request.url==="/data")
{
  fs.readFile("./data.json",(err,data)=>{
    if(err){
        response.write(err)
        response.end();
           }
    else{
        response.end(data);
        }
  })
}
//post method
else if(request.url==="/addDetails" && request.method==="POST")
{
    // console.log(request.body)
    let str="";
    request.on("data",(packet)=>{
str+=packet;
    })
    request.on("end",()=>{
        console.log(str)
            })
    
    response.end("Data has been posted!!")
}

else if(request.url==="/movie")
{
    //without streams
    // const movie=fs.readFileSync("./lecture.txt","utf-8")
    // response.end(movie);

    //without stream
const moviestream=fs.createReadStream("./lecture.txt","utf-8")
moviestream.pipe(response)

}

else if(request.url==="/report")
{
    response.setHeader("Content-type","text/html")
    response.end("<ol><li>There will be the report page</li></ol>");
}


else if(request.url==="/report/ram")
{
    response.end("There will be the report of Ram");
}



else{
    response.end("Invalid Page")
}
})

server.listen(4500,()=>{
// console.log("this server is 4500")
})




