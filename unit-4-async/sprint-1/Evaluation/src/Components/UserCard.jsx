// Your code goes here
// do a default export

// {avatar,user_name,user_posts,user_followers,user_address}

// avatar="http://dummyimage.com/200x200.jpg/ff4444/ffffff" user_name="Alf"
//  user_posts="930" user_followers="97350" user_address="43766 Mallory Place" 

import React from "react"
function Avatar(){
   
    const [follow2,setFollow2]=React.useState("follow")
let user={
    avatar:"http://dummyimage.com/200x200.jpg/ff4444/ffffff",
    user_name:"Alf",
    user_posts:930,
    user_followers:97350,
    user_address:"43766 Mallory Place"
}

const handleFollow=()=>{
     follow2==="follow"?setFollow2("following"):setFollow2("follow")
    
}

    return (
        <>
        <div style={{border:"1px solid black",width:"800px",marginLeft:"250px"}}>

        <div>
            <img style={{borderRadius:"50%",margin:"30px"}} src={user.avatar} alt={user.user_name} />
            </div>

            <div>     
<h2 style={{marginLeft:"290px",marginTop:"-250px"}}>{user.user_name}</h2>
</div>

<div>
<p style={{marginLeft:"250px"}}>{user.user_address}</p>
</div>

<div style={{marginLeft:"250px"}}>
<h3>Posts</h3>
<p>{user.user_posts}</p>
</div>

<div style={{marginLeft:"250px"}}>
<h3> Followers</h3>
<p>{user.user_followers}</p>
</div>

<div style={{marginLeft:"550px",marginBottom:"100px",marginTop:"-100px"}}>
<button style={{padding:"20px",borderRadius:"10px"}} onClick={handleFollow}>{follow2}</button>
</div>
</div>
        </>
    )
}
export default Avatar;
