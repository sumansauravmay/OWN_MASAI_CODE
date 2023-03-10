import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Login from "../Component/Login";
import User from "../Component/User";
import SingleUserPage from "../Component/SingleUserPage";
import PrivateRoute from "../Private/PrivateRouter";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
        <Home/>
        </PrivateRoute>
        }></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/user" element={
        <PrivateRoute>
        <User/>
        </PrivateRoute>
        }>
        </Route>
        <Route path="/user/:user_id" element={<SingleUserPage/>}></Route>
      </Routes>
    </>
  );
}
export default AllRoutes;
