import Loader from "../Components/Loader";
import React from "react"
import { Link, useSearchParams } from "react-router-dom";


function Dashboard() {

const [data,setData]=React.useState([]);
const [searchParams,setSearchParams]=useSearchParams()
const [page,setPage]=React.useState(1);
const [loading,setLoading]=React.useState(false);


React.useEffect(()=>{
  fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res)=>res.json())
  .then((res)=>{
    setLoading(true)
    setData(res);
    console.log(res)
    setLoading(false)
  })
},[page]);

if(loading)
{
  return <h1>Loading.....</h1>
}

React.useEffect(()=>{
  let paramsObj={page}
  setSearchParams(paramsObj)
},[page])


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center",flexDirection:"column",width:"1000px",margin:"auto" }}>
        <Loader />
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
{
  data && data?.data &&
  data?.data.map((retaurant)=>(
    <div key={retaurant.id} >

      {/* <img src={retaurant.image} alt="res_image"/>
      <br/> */}
      <Link to={`/restaurants/${retaurant.id}`}>{retaurant.name}</Link>
      
    </div>
  ))
}
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
      <button>{page}</button>
      <button disabled={page===10} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default Dashboard;
