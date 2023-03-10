// Your code goes here
// do a default export

import React from "react";

function UserCard(){
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
        <div>
        <div style={{border:"1px solid black",width:"800px",marginLeft:"250px"}}>

        <div>
            <img style={{borderRadius:"50%",margin:"30px"}} src={user.avatar} alt="Alf" />
            </div>

            <div>     
<h2 style={{marginLeft:"290px",marginTop:"-250px"}} data-testid = "user_name">{user.user_name}</h2>
</div>

<div>
<p style={{marginLeft:"250px"}} data-testid="user_address">{user.user_address}</p>
</div>

<div style={{marginLeft:"250px"}}>
<h3>Posts</h3>
<p data-testid = "user_posts">{user.user_posts}</p>
</div>

<div style={{marginLeft:"250px"}}>
<h3>Followers</h3>
<p data-testid = "user_followers">{user.user_followers}</p>
</div>

<div style={{marginLeft:"550px",marginBottom:"100px",marginTop:"-100px"}}>
<button style={{padding:"20px",borderRadius:"10px"}} onClick={handleFollow}>{follow2}</button>
</div>
</div>
        </div>
    )
}
export default UserCard;
