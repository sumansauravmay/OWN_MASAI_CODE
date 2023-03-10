import { Link } from "react-router-dom";
import React from "react";

export const transform=(type)=>{
  switch(type){
    case "fine_dining":
      return "Fine_dining"

      case "ethnic":
      return "Ethnic"

      case "fast_food":
      return "Fast_food"

      case "cafe":
      return "Cafe"

      case "casual_dining":
        return "Casual_dining"

      default:
        return type
  }
}


export default function RestaurantCard({name,rating,type,price_starts_from,id}) {
  return (
    <tr data-testid="item" key={id}>
      <td>
        <Link to={`/restaurantPage/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{transform(type)}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
