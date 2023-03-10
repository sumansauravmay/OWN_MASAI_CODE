
const validator=(req,res,next)=>{
        const password=req.query.password;
        const role=req.query.role;
    if(Number(password)===7877 && (role==="admin" || role==="teacher"))
    {
        next();
    }
    else
    {
res.send("You are not authorised to do this operation")
    }
    // next();
}

module.exports={validator}
