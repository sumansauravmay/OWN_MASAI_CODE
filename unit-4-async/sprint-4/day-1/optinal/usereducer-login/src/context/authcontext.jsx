import { createContext, useReducer } from "react";
import { login, logout } from "./creator";
import reducer from "./reducer";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const initialState = {
    token: null,
    isAuth: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
