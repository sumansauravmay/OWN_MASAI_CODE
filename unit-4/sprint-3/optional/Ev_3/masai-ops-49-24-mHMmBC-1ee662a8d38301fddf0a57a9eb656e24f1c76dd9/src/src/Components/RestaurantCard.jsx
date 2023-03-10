import { Link } from "react-router-dom";

export default function RestaurantCard({name,rating,type,price,id}) {
  return (
    <tr data-testid="item" key={id}>
      <td>
        <Link to={`/restaurantPage/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}
