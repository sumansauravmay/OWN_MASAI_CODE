import React, { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function Login() {
  const [data, setData] = React.useState({});
  const { toggleAuth, isAuth } = useContext(AppContext);

  const loginStatus = (e) => {
    e.preventDefault();
    return fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.token) {
          toggleAuth();
        }
      });
  };

  const handleChange = (e) => {
    const { type, value } = e.target;
    setData({
      ...data,
      [type]: value
    });
    console.log(data);
  };

  return (
    <>
      <form onSubmit={loginStatus}>
        <input
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="enter email"
        />
        <input
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="enter password"
        />
        <input type="submit" value="Login" />
      </form>
      {isAuth && <p>Login Successful</p>}
    </>
  );
}
export default Login;
