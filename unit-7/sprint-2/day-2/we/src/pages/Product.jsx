import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const Product = () => {
    const [data,setData]=React.useState([]);
    const [page,setPage]=React.useState(1);
    const [searchitem,setSearchitem]=useState("")
    // const [state,setState] = useState("asc")

const getData=(page=1)=>{
        return fetch(`https://wild-puce-dragonfly-belt.cyclic.app/bookdata?_limit=3&_page=${page}`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setData(res)
        })
    }

useEffect(()=>{
    getData(page)
},[page])

const handleascendingfunc=()=>{
let x=data.sort((a,b)=>a.cost-b.cost)
getData(x)
console.log(data)
}

// const handledescendingfunc=()=>{
//    let y=data.sort((a,b)=>b.cost-a.cost)
//     getData(y)
//     // getData(y)
// }
const handleChangepage=(val)=>{
const value=page+val;
setPage(value)
}

  return (
    <div>
        <input style={{margin:"10px",padding:"5px"}}
         onChange={(e)=>setSearchitem(e.target.value)}
         type="search" placeholder='Serach by book name'/>

         <select name="" id="" style={{padding:"5px",margin:"5px"}}>
            <option value="All">All</option>
            <option value="fiction">Fiction</option>
            <option value="Bussiness">Bussiness</option>
            <option value="story">Story</option>
            <option value="Study">Study</option>
         </select>
         <button style={{padding:"5px",margin:"5px"}} onClick={handleascendingfunc}>Ascending</button>
         <button style={{padding:"5px",margin:"5px"}}>Descending</button>
        {
            data
            .filter((item)=>{
                if(searchitem==="All")
                {
                    return item;
                }else if(item.book_name.toLowerCase().includes(searchitem.toLowerCase()))
                {
                    return item;
                }
            })
            .map((item)=>(
                <div key={item.id}>
                <img src={item.image_url} alt="pic"/>
                <h1>Name : {item.book_name}</h1>
                <p>Author:{item.author}</p>
                <p>Author:{item.genre}</p>
                <p>₹ {item.cost}</p>
                </div>
            ))
        }
        <Pagination current={page} onChange={handleChangepage}/>
    </div>
  )
}

export default Product;
