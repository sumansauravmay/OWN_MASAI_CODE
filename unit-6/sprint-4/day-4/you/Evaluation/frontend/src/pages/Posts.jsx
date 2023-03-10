import React from "react";


function Posts(){
    const [data,setData]=React.useState([])
    React.useEffect(()=>{
        fetch("https://clear-boa-trousers.cyclic.app/posts",{
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then((res)=>res.json()).then(res=>setData(res))
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <h1>Data: {data.length}</h1>
        {
            data?data.map((el)=>
           <> <h1>Title:{el.title}</h1>
           <p>Body:{el.body}</p>
           <p>Device:{el.device}</p>
           <button>delete</button>
           <button>edit</button>
           <hr></hr>
           </>):"no posts"
        }
        </div>



  )
}


export default Posts

