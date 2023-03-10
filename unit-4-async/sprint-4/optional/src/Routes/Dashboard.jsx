import React, { useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import {AuthContext} from "../Context/AuthContext";



function Dashboard() {
const [data,setData]=React.useState([])
const [page,setPage]=React.useState(1)
const [total,setTotal]=React.useState()

const {authState,logoutUser}=React.useContext(AuthContext)

React.useEffect(()=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
  .then((res)=>res.json())
  .then((res)=>{
    setData(res)
    setTotal(res.totalPages)
    console.log(res)
  })
},[])


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
      <div style={{ display: "flex", justifyContent: "center" }}>
{
  <RestaurantTable data={data && data?.data &&
  data?.data}/>
}
 

        {/* restaurant table */}
      </div>
      <div data-testid="pagination-container">
      <Pagination currentPage={page} handlePageChange={(page)=>setPage(page)} totalPages={total}/>
      </div>
    </div>
  );
}

export default Dashboard;
