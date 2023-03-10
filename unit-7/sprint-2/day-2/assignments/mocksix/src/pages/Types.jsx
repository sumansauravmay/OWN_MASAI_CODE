import React from 'react';
import Pagination from './Pagination';

const Types = () => {

    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState("false");
    const [page,setPage]=React.useState(1)

let getData=(page=1)=>{
    setLoading(true)
    return fetch(`https://pokeapi.co/api/v2/type?limit=20&offset=${page}`)
    .then((res)=>res.json())
    .then((res)=>{
        setLoading(false)
        console.log(res.results)
        setData(res.results)
    })
}

React.useEffect(()=>{
    getData(page)
},[page])

const handlechangePage=(val)=>{
    const value=page+val;
    setPage(value)
}

if(loading){
    <h1>Loading..</h1>
}



  return (
    <>
    <h1>Types Data</h1>
        {
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",textAlign:"left",width:"50%",margin:"auto"}}>
                    <h2>{item.name}</h2>
                    <p>#{index+1}</p>
                </div>
            ))
        }
        <Pagination current={page} onChange={handlechangePage}/>
    </>
  )
}

export default Types;