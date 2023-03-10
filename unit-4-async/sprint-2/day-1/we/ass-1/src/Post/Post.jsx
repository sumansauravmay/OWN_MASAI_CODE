import React from "react";


function Post(){
const [posts,setPosts]=React.useState([]);

const handleShowPost=()=>{
    fetch("http://localhost:3000/api/todo")
    .then((res)=>res.json())
    .then((res)=>setPosts(res))
}
    return (
        <>
            <button onClick={handleShowPost}>Get Tasks</button>
            <ol>
            {posts.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
            </ol>
            
        </>
    )
}
export default Post;