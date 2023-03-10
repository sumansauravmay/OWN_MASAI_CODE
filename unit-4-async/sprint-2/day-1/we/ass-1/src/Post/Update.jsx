import React from "react";


function Update(){

const [todo,setTodo]=React.useState([])

let getData=async()=>{
 let data={
    title:todo,
    status:false,
    id:Date.now()
};

 let res=await fetch("http://localhost:3000/api/todo",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    }
})
res=await res.json()
console.log(res)
 setTodo("")
}

const handleAddClick=(e)=>{
    e.preventDefault()
   getData()

}

    return (
        <>
           <input type="text" placeholder="Add task" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
     <button onClick={handleAddClick}>Add</button> 
            
        </>
    )
}
export default Update;