import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import SingleUserPage from "./SingleUserPage";
import PageNotFound from "./NotFoundPage"

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
     
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:user_id" element={<SingleUserPage />}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
