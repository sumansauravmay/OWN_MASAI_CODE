
const Validator=(req,res,next)=>{
   const {title,genre,price,author}=req.body;

if(typeof title=="string" && typeof genre=="string" && typeof price=="number" && typeof author=="string")
{
    next()
}
else{
    res.send("err"+":"+"All the fields are not there")
}

}

module.exports=Validator;

