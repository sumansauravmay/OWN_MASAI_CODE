import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";


const getData=async(page)=>{
  try{
   
   let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?limit=10`);
   
    let data2=await res.json();
    
    let data3=data2.data;
    
    return data3;


  } catch(error){
    console.log(error)
  }
}

function Countries() { 
  // return <LoadingIndicator />;
  const [post,setPost]=useState([]);
  const [page,setPage]=useState(1);

useEffect(()=>{
  fetchAndUpdateData()
},[page])

  const fetchAndUpdateData=async(page=1)=>{
    try{
      const data2=await getData();
      
      for(let i=0;i<data2.length;i++)
    {
      console.log("data",data2[i]);
      var data3=data2[i].country;
      setPost(data3.country);
      console.log("data3",data3);
    }
       
      
    } catch(err){
      console.log(err);
    }
  }

const handlePageChange=(changeby)=>{
  setPage(page+changeby);
  fetchAndUpdateData(page+changeby);
}

  return (
    <div>
    <LoadingIndicator />
      <h1>Country</h1>
   
        {
   post.map((postcountry)=>(
  <li key={postcountry.id}>{postcountry.data3}</li>
))
        }
      
      <button disabled={page===1} onClick={()=>handlePageChange(-1)}>Prev</button>
      <button>{page}</button>
      <button disabled={page===29} onClick={()=>handlePageChange(1)}>Next</button>
    </div>
  );
}

export default Countries;
