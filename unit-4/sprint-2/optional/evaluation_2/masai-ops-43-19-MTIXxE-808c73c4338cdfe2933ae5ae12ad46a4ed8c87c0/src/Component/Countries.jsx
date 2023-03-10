import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard"
import React from "react";
import Pagination from "./Pagination";



function Countries() { 
  const [data,setData]=React.useState([])
  const [isLoading,setIsLoading]=React.useState(false)
  const [page,setPage]=React.useState(1)
  const [total,setTotal]=React.useState(0)
  
  const getData=(page=1)=>{
    setIsLoading(true)
    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
    .then((res)=>res.json())
    .then((res)=>{
      
      console.log(res.data)
      setData(res.data)
      setTotal(res.totalPages)
      setIsLoading(false)
    })
    .catch((err)=>{
      setIsLoading(false)
    })
  }

 
React.useEffect(()=>{
  getData(page)
},[page])


const handlePagechange2=(val)=>{
  const value=page+val;
  setPage(value)
}
if(isLoading)
{
  return <LoadingIndicator/>
}

 



  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
      {/* <CountriesCard 

      /> */}
      {
        data.map((item)=>(
          <CountriesCard key={item.id} country={item.country} population={item.population} id={item.id}/>
        ))
      }
      </div>
      
      {/* {
      data.map((item)=>(
        
          <div key={item.id}>
          <div style={{border:"1px solid black",width:"1300px",margin:"auto",borderRadius:"10px",marginTop:"10px"}}>
          <div style={{display:"flex",marginLeft:"25px"}}>
            <p>Country : </p>
            <b data-testid="country-card-name" style={{margin:"15px"}}> {item.country}</b>
          </div>

          <div style={{display:"flex",marginLeft:"25px"}}>
            <p>Population : </p>
            <b data-testid="country-card-population" style={{margin:"15px"}}> {item.population}</b>
          </div>
          </div>
          </div>
       ))
      } */}
      
      <div>
        <Pagination page2={page} handlePagechange={handlePagechange2} totalPage={total}/>
      </div>
    </div>
  );
}

export default Countries;
