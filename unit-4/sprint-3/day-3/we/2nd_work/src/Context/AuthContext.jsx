import React,{useState} from "react";

export const AuthContext=React.createContext();

function AuthcontextProvider({children}){
    
    const [isAuth,setIsAuth]=useState(true);

const toggleAuth=()=>{
    setIsAuth(!isAuth)
}
    

    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
    )
}
export default AuthcontextProvider;