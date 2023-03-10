import axios from "axios";

export const getCity = (params = {}) => {
  return axios.get(`http://localhost:3000/api/citystatus`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _order: params.order,
      _sort: params.sort,
      country: params.country
    }
  });
};

export const addCity2 = (data = {}) => {
  return axios.post(`http://localhost:3000/api/citystatus`, {
    city: data.city,
    country: data.country,
    population: data.population
  });
};

//1st methos
// export const deleteCity=(id)=>{
//   return axios({
//       method:"DELETE",
//       baseURL:"http://localhost:3000",
//       url:`/api/citystatus/${id}`
//     }
//   )
// }

//2nd method
export const deleteCity = (id) => {
  return axios.delete(`http://localhost:3000/api/citystatus/${id}`);
};
