import { AppContext } from "./AppContextProvider";
import { useContext } from "react";

function LoginHeader() {
  const { authState, handleLogin, handleLogout } = useContext(AppContext);

  if (!authState.isAuth) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  return (
    <div>
      <h3>{authState.username}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LoginHeader;
