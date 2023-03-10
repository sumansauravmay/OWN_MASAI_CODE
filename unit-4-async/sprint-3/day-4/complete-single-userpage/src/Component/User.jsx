import React from "react";
import { Link } from "react-router-dom";


function User() {
  const [data, setData] = React.useState([]);

  const getData = () => {
    return fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>User</h1>
      {data?.data?.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="ima" />
          <h3>{user.first_name}</h3>

          <Link to={`/user/${user.id}`}>
            <button>see more</button>
          </Link>
        </div>
      ))}
    
    </>
  );
}
export default User;
