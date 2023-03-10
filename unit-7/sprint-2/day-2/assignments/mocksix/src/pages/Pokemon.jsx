import React from 'react';
import { Link } from 'react-router-dom';
import Favorites from './Favorites';
import Pagination from './Pagination';

const Pokemon = () => {
    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState("false");
    const [page,setPage]=React.useState(1)

let getData=(page=1)=>{
    setLoading(true)
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
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
const favoritesfun=(item)=>{
    let arr=JSON.parse(localStorage.getItem("fav"))||[];
    arr.push(item)
localStorage.setItem("fav",JSON.stringify(arr))
}
  return (
    <>
    <h1>Pokemon</h1>
   
        {
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",textAlign:"left",width:"50%",margin:"auto"}}>
                    <Link to={`/pokemon/${item.name}`}>
                    <h2>{item.name}</h2>
                    <p>#{index+1}</p>
                    </Link>
                   
                    <button onClick={()=>favoritesfun(item)} style={{background:"black",color:"white",margin:"5px"}}>Add to Favourites</button>
                </div>
            ))
        }
        <Pagination current={page} onChange={handlechangePage}/>
    </>
  )
}

export default Pokemon;