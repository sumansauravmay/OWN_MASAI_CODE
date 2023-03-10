import React from "react";
import { useParams } from "react-router-dom";

const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
}

function SingleRestaurantPage() {

  const [data,setData]=React.useState({})
  
  const {item_id}=useParams()


  React.useEffect(()=>{
   
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${item_id}`)
    .then((res)=>{
      setData(res.data)
      
    })
  },[item_id])


  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data.image} alt="img"/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
