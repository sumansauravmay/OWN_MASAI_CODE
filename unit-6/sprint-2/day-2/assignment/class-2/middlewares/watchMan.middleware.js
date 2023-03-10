


const watchMan=(req,res,next)=>{
    if(req.url=="/data")
    {
      next();  
    }
    else{
        res.send("Bye!!")
    }
}

module.exports={watchMan}