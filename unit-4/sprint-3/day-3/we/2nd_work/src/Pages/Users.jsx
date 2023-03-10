import { useState, useEffect, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Users = () => {
  const [data, setData] = useState({});
const Navigate=useNavigate();
const {isAuth}=useContext(AuthContext);
  // on component load
  // i want to get a list of users in this page
  // i want to render it to the UI

  useEffect(() => {
    getData(`https://reqres.in/api/users`).then((res) => {
      setData(res);
    });
  }, []);

// let isAuth=true;
if(!isAuth)
{
    return <Navigate to="/" />
}


  return (
    <>
      <h1>Users</h1>
      <Link to="/">
        <button>go back to Home</button>
      </Link>
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
              <p>{user.first_name}</p>
              <p>MORE DETAILS</p>
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Users;
