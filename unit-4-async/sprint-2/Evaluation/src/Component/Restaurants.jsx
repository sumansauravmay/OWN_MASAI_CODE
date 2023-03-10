import React from "react";
import RestaurantCard from "./RestaurantCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";


function Restaurants() {
const [data,setData]=React.useState([]);
const [loading,setLoading]=React.useState(false);
const [page,setPage]=React.useState(1);

// const [total,setTotalPage]=React.useState()
    // return <LoadingIndicator />;

const getData=(page=1)=>{
  setLoading(true)
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    setData(res.data)
    setLoading(false)
  })
}

React.useEffect(()=>{
  getData(page)
},[page])

if(loading)
{
return <LoadingIndicator/>
}

const handlePageChange=(val)=>{
  const value=page+val;
  setPage(value)
}

// const totalPage=(){
//   setTotalPage(10)
// }

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       {
        data.map((item)=>(
          <RestaurantCard
          image={item.image}
          key={item.id}
          id={item.id} 
          name={item.name} 
          type={item.type} 
          rating={item.rating} 
          number_of_votes={item.number_of_votes}
          price_starts_from={item.price_starts_from}
/>
        ))
       }
      
      </div>
      <div>
        {/* Pagination Component */}
        <Pagination current={page} onChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Restaurants;


// name,type,image,rating,number_of_votes,price_starts_from