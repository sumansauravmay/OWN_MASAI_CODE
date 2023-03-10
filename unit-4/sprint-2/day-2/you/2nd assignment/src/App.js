
import './App.css';
import {useState} from "react";
let getData=async()=>{
  try{
    let res=await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    let data=await res.json();
    return data;
  } catch(error){
    console.log(error)
  }
}

function App() {
const [posts,setPosts]=useState([]);
const fetchAndUpdateData=async()=>{
  try{
    const data=await getData();
    setPosts(data)
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className="App">
      <h1>POST</h1>
      <button onClick={fetchAndUpdateData}>Post item</button>
      <ol>
        {posts.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
