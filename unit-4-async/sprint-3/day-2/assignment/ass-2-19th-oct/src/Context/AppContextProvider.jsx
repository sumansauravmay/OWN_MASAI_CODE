import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
