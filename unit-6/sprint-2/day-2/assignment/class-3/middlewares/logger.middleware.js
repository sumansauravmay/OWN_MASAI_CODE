const fs=require("fs");

const logger=(req,res,next)=>{
    //req.url==>route
    //req.method==>method
//append the file(appendFileSync)

fs.appendFileSync("../logs.text",`Route:${req.url} Method:${req.method}\n`,"utf-8")
next();



}

module.exports={logger};