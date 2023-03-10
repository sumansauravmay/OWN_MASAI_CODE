import React from "react";
import { NavLink } from "react-router-dom";
import {AppContest} from "../Contest/AppContestProvider"

const links = [
  { path: "/dashboard", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/login", title: "Login" },
  { path: "/user", title: "User" }
];
function Navbar() {
  // let activeStyle = {
  //   textDecoration: "underline",
  // };
 const {isAuth,LogoutAuth}=React.useContext(AppContest)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        width: "1000px"
      }}
    >
      {links.map((item) => (
        <NavLink
          to="messages"
          // style={({ isActive }) => (isActive ? activeStyle : undefined)}
          key={item.path}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
{
  isAuth && <button onClick={LogoutAuth}button>Logout</button>
}

    </div>
  );
}
export default Navbar;
