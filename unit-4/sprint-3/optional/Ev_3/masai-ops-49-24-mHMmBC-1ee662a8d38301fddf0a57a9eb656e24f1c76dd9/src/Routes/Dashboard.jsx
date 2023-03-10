import React from "react";
import Loader from "../Components/Loader";
import { AppContest } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";



function Dashboard() {
const {authState,logoutUser}=React.useContext(AppContest);

const [data,setData]=React.useState([]);
const [total,setTotal]=React.useState()
 const [page,setPage]=React.useState(1);
 const [filter, setFilter]= React.useState("")
const [loading,setLoading]=React.useState(false);


React.useEffect(()=>{
  setLoading(true)
  fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}&filter=${filter}`)
  .then((res)=>res.json())
  .then((res)=>{
    setData(res);
    setTotal(res.totalPages)
    console.log(res)
    setLoading(false)
  })
},[page,filter]);

// if(loading)
// {
//   return <Loader/>
// }

// const handlePageChange=(val)=>{
//   const value=page+val;
//   setPage(value)
// }

const handleFilterChange=(e)=>{
  console.log(e.target.value);
  setFilter(e.target.value)
  
}

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" value={filter} onChange={handleFilterChange} >
          <option value="">All</option>
          <option value="fine_dining">fine_dining</option>
          <option value="ethnic">ethnic</option>
          <option value="fast_food">fast_food</option>
          <option value="cafe">cafe</option>
          <option value="casual_dining">casual_dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
       {/* <Loader /> */}
       
      {
      loading?<Loader/> : <RestaurantTable data={data && data?.data &&
  data?.data} />
      }
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      
      {/* {
  data && data?.data &&
  data?.data.map((el)=>(
<RestaurantCard key={el.id} id={el.id}
name={el.name}
rating={el.rating}
type={el.type}
price={el.price_starts_from}
/>  
  ))
} */}

      



      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination currentPage={page} handlePageChange={(page)=>setPage(page)} totalPages={total}/>
      {/* <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
      <button>{page}</button>
      <button disabled={page===10} onClick={()=>setPage(page+1)}>Next</button> */}
      </div>
    </div>
  );
}

export default Dashboard;
