import { useState, useContext } from "react";
import { AuthContext } from "./context/authcontext";
import { login, logout } from "./context/creator";

import axios from "axios";
export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  // const Navigate = useN
  const { state, dispatch } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => res.data)
      .then((res) => {
        if (res.token) dispatch(login(res.token));
      });
  };

  const onChangeData = (e) => {
    const { type, value } = e.target;
    setUserData({ ...userData, [type]: value });
    // console.log(data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={onChangeData}
          value={userData.email}
        />
        <br />
        <br />
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={onChangeData}
          value={userData.password}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      <h4>My Token :{state.token}</h4>
      <p>My is Auth : {state.isAuth + ""} </p>
    </>
  );
}
