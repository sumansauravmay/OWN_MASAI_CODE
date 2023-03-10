import React from "react";
import Loader from "../Components/Loader";
import { AppContest } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";



function Dashboard() {
const {token}=React.useContext(AppContest);

const [data,setData]=React.useState([]);
const [total,setTotal]=React.useState()
 const [page,setPage]=React.useState(1);
const [loading,setLoading]=React.useState(false);


React.useEffect(()=>{
  setLoading(true)
  fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res)=>res.json())
  .then((res)=>{
    
    setData(res);
    setTotal(res.totalPages)
    console.log(res)
    setLoading(false)
  })
},[page]);

// React.useEffect(()=>{
//   let paramsObj={page}
//   setSearchParams(paramsObj)
// },[page])


if(loading)
{
  return <Loader/>
}

const handlePageChange=(val)=>{
  const value=page+val;
  setPage(value)
}


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
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
      <div style={{ display: "flex", justifyContent: "center" }}>
       {/* <Loader /> */}
       
      {<RestaurantTable/>}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      {/* <Link to={`/restaurants/${el.id}`}>/ */}
      {
        
  data && data?.data &&
  data?.data.map((el)=>(
   
<RestaurantCard key={el.id} id={el.id}

name={el.name}
// </Link>
rating={el.rating}
type={el.type}
price={el.price_starts_from}

/>  

  ))
 
}

      



      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination currentPage={page} handlePageChange={handlePageChange} totalPages={total}/>
      {/* <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
      <button>{page}</button>
      <button disabled={page===10} onClick={()=>setPage(page+1)}>Next</button> */}
      </div>
    </div>
  );
}

export default Dashboard;
