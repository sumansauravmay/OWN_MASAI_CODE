import React from "react";

export const AuthContext=React.createContext();


function AuthContextProvider({children}) {
const [isAuth,setIsAuth]=React.useState(false)
const [token,setToken]=React.useState("")

const loginUser=(token)=>{
    setIsAuth(!isAuth)
    // setToken(token)
}
const handleToken=(value)=>{
setToken(value)
}
const logoutUser=()=>{
    setIsAuth(false)
}

return (
    <>
    <AuthContext.Provider value={{isAuth,loginUser,logoutUser,token,handleToken}}>
        {children}
    </AuthContext.Provider>
    </>
)

}

export default AuthContextProvider;
