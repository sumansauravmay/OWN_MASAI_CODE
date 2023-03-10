import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
  return fetch(`https://reqres.in/api/users`).then((res) => res.json());
};

const Users = () => {
  const [data, setData] = useState({});

  // on component load
  // i want to get a list of users in this page
  // i want to render it to the UI

  useEffect((url) => {
    getData(url).then((res) => {
      setData(res);
      console.log(res)
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {/* true && true && "masai" ---> "masai"*/}
      {/* {data && data.data && data.data.map((user) => <p>{user.first_name}</p>)} */}
      <ul>
        {/* true && true && "masai" -->  "masai"*/}

        {data &&
          data?.data &&
          data?.data.map((user) => (
            <div  key={user.id}>
           
              <Link to={`/users/${user.id}`}>
              <img src={user.avatar} alt="pic"/>
              <p>{user.first_name} {user.last_name}</p>
              <p>MORE DETAILS</p>
              </Link>
            </div>
          ))}
          
      </ul>
    </>
  );
};

export default Users;
