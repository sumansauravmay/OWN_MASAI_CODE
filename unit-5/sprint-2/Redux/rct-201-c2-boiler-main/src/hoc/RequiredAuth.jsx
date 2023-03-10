import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const {data}=useSelector((store)=>store.auth)
  if(!data.isAuthenticated){
<Navigate to="/login"/>
  }
  return children;
};

export default RequiredAuth;
