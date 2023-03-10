import React from "react";

export const AppContest=React.createContext()

function AppContextProvider({children}) {
    const [isAuth,setIsAuth]=React.useState(false)
    const [token,setToken]=React.useState("")

const loginAuth=(token)=>{
    setIsAuth(true)
   setToken(token)
}



    return (
        <>
<AppContest.Provider value={{isAuth,loginAuth,token}}>
    {children}
</AppContest.Provider>
        </>
    )
}

export default AppContextProvider;
