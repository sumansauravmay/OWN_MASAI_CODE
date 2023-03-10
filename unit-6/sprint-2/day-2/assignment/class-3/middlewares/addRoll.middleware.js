const fs=require("fs")


const addRoll=(req,res,next)=>{
    // let roll=Math.random()*100
    // req.body.roll_no=roll;
    // next();
    if(req.method==="POST")
    {
        let roll=Math.random()*100
        req.body.roll_no=roll;
        req.body.school="Masai School"
        next();
    }
}

module.exports={addRoll};

