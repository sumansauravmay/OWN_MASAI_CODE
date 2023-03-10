import React from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  const toggleAuth = () => {
    setIsAuth(true);
  };

  return (
    <>
      <AppContext.Provider value={{ isAuth, toggleAuth }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
export default AppContextProvider;
