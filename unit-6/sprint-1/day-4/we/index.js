const http=require("http");
const fs=require("fs")

const server=http.createServer((request,response)=>{
if(request.url==="/")
{
    response.end("Welcome to text file")
}

else if(request.url==="/textsync")
{
fs.readFile("./data.json",(err,data)=>{
    if(err)
    {
        response.end(err)
    }
    else{
        response.end(data)
    }
})
}

else if(request.url==="/text")
{
fs.readFile("./file.json",(err,data)=>{
    if(err)
    {
        response.end(err)
    }
    else{
        response.end(data)
    }
})
}

})
server.listen(4000,()=>{
    console.log("this server is running on 4000 port")
})