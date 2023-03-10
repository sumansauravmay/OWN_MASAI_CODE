import React, { useEffect, useState } from "react";
import AddCity from "../Addcity/AddCity";
import { getCity, addCity2, deleteCity } from "./api";

export default function City() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getAddCitydata = (page) => {
    getCity({
      page,
      limit: 5,
      sort: "population",
      order: "asc",
      country: "India"
    }).then((res) => setData(res.data));
  };

  useEffect(() => {
    getAddCitydata(page);
  }, [page]);

  const handleAddCity = (data) => {
    //make a post request call
    // console.log(data);
    addCity2(data).then(() => {
      getAddCitydata(page);
      alert("City add successfully!!");
    });
  };

  const handleDelete = (id) => {
    deleteCity(id).then(() => {
      getAddCitydata(page);
      alert("City deleted successfully!!");
    });
  };

  return (
    <div>
      <AddCity onAddCity={handleAddCity} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            marginLeft: "200px",
            padding: "5px",
            gap: "5px"
          }}
        >
          <div>{item.city}</div>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button>{page}</button>
      <button disabled={page === 3} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
