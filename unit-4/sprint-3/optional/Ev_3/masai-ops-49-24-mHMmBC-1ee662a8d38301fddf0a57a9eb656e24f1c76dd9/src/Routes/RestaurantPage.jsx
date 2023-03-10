import React from "react";
import { useParams } from "react-router-dom";
 import Loader from "../Components/Loader";
import { transform } from "../Components/RestaurantCard";

const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
}


function RestaurantPage() {
  const [data,setData]=React.useState({})
  const [loading,setLoading]=React.useState(false)
  const {item_id}=useParams()
  


  React.useEffect(()=>{
    setLoading(true);
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${item_id}`)
    .then((res)=>{
      setData(res.data)
      setLoading(false)
    })
  },[item_id])

if(loading)
{
  return <Loader/>
}


  return (
    <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" width={"100%"} src={data.image} alt="avnish"/>
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{transform(data.type)}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
