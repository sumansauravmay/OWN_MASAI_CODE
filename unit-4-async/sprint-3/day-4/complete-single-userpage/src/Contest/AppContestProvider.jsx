import React from "react";

export const AppContest = React.createContext();

export default function AppContestProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  const LoginAuth = () => {
    setIsAuth(true);
  };

  const LogoutAuth = () => {
    setIsAuth(false);
  };

  return (
    <AppContest.Provider value={{ isAuth, LoginAuth, LogoutAuth }}>
      {children}
    </AppContest.Provider>
  );
}
