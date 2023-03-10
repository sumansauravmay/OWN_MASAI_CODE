import {useState,useEffect} from "react";
import './App.css';

const getData=async(page)=>{
  try{
    let res=await fetch(
      `https://infinite-brushlands-51927.herokuapp.com/api/details?_limit=3&_page=${page}`
    );
    let data=await res.json();

    return data;
  } catch(error){
    console.log(error)
  }
};


function App() {
const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  const [page,setPage]=useState(1);

useEffect(()=>{
  fetchAndUpdateData(page);
},[page])

  const fetchAndUpdateData=async(page=1)=>{
    try{
      setLoading(true)
      const data=await getData(page);
      setPosts(data);
      setLoading(false)
    } catch(err){
      setLoading(false)
      console.log(err)
    }
  };
  
const handlePageChangge=(changeby)=>{
  setPage(page+changeby)
  fetchAndUpdateData(page+changeby)


}

if(loading){
  return <h1>Loading...</h1>
}

  return (
    <div className="App">
   <h1>Posts</h1>
{/* <button onClick={fetchAndUpdateData}>Get Post</button> */}
    <ul>
      {posts.map((postitem)=>(
        <li 
        key={postitem.id}>{postitem.id} {"-"} {postitem.name}
        </li>
       ))}
    </ul>
    <button disabled={page===1} onClick={()=>handlePageChangge(-1)}>PREV</button>
    <button>{page}</button>
    <button disabled={page===10} onClick={()=>handlePageChangge(1)}>NEXT</button>
    </div>
  );
}

export default App;



