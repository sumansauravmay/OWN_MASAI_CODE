import React from "react";


export const AppContext=React.createContext()

function AuthContextProvider({children}){
const [isAuth,setIsAuth]=React.useState(true)

const toggleAuth=()=>{
    setIsAuth(!isAuth)
}



    return (
        <AppContext.Provider value={{isAuth,toggleAuth}}>
            {children}
        </AppContext.Provider>
    )
}
export default AuthContextProvider;