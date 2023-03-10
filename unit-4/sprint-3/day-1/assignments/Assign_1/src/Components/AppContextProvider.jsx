import { createContext,useState } from "react";


export const AppContext=createContext();

function AppContextProvider({children}){
    const [theme,settheme]=useState("dark");

    const toggleTheme=()=>{
        settheme(theme==="dark"?"light":"dark")
    }

    return <AppContext.Provider value={{
        theme,toggleTheme
    }}>{children}</AppContext.Provider>
}
export default AppContextProvider;