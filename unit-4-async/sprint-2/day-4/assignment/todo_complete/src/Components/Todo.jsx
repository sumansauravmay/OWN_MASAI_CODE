import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

//fetching data

const getTodos=(arg={})=>{
    const {page=1}=arg
    return fetch(`http://localhost:4000/todo?_page=${page}&_limit=2`)
    .then((res)=>res.json())

}

const addTodo=(todo)=>{

    return fetch(`http://localhost:4000/todo`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(todo)
    }).then((res)=>res.json())
}

// toggleTodos
const ToggleTodos=(id,newStatus)=>{
    return fetch(`http://localhost:4000/todo/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:newStatus})
    }).then((res)=>res.json())

}

//deleteTodos
const DeleteTodos=(id)=>{
    return fetch(`http://localhost:4000/todo/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
       
    }).then((res)=>res.json())

}



function Todo(){
    const [todos,setTodos]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [page,setPage]=React.useState(1)

React.useEffect(()=>{
    handleGetTodos(page)

},[page])

const handleGetTodos=()=>{
    setLoading(true)
   return getTodos({page}).then((res)=>{
        setTodos(res)
        console.log(res)
        setLoading(false)
    })
    .catch((err)=>{
    setLoading(false)
     console.log(err)
    })
}

const handleAdd=(text)=>{
const item={
    title:text,
    status:false,
    id:Date.now()
}
setLoading(false)
addTodo(item).then((res)=>{console.log(res)
handleGetTodos()

})
}

const handleToggle=(id,newStatus)=>{
    setLoading(true)
    ToggleTodos(id,newStatus).then((res)=>{
        handleGetTodos()
        setLoading(false)
    })
    .catch((err)=>{
        setLoading(false)
    })
}

const handleDelete=(id)=>{
    setLoading(true)
    DeleteTodos(id).then((res)=>{
        handleGetTodos()
        setLoading(false)
    })
    .catch((err)=>{
        setLoading(false)
    })
}

if(loading)
{
  return <h1>...Loading</h1>
}

const handlePageChange=(val)=>{
    const value=page+val;
    setPage(value)
}

    return (
        <>
           <AddTodo handleAdd={handleAdd}/>
           {
            todos.map((item)=>{
                return (
                <TodoItem key={item.id} 
                id={item.id}
                 title={item.title}
                status={item.status}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                 />
            )
           })
           }
            <button disabled={page===1} onClick={()=>handlePageChange(-1)}>PREV</button>
            <button>{page}</button>
            <button onClick={()=>handlePageChange(1)}>NEXT</button>
         
        </>
    )
}
export default Todo;