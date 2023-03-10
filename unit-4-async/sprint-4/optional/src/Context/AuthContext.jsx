import React from "react";

export const AuthContext=React.createContext()


function AuthContextProvider({children}) {

    const [state,setState]=React.useState({
        isAuth:false,
        token:null
    })
   


    
// loginUser
const loginUser=(token)=>{
   setState({
    ...state,
    isAuth:true,
    token
   })
}

// 
// logoutUser
const logoutUser=()=>{
    setState({
        ...state,
        isAuth:false,
        token:null
    })
}

    return (
        <>
<AuthContext.Provider value={{authState:state,loginUser,logoutUser}}>
    {children}
</AuthContext.Provider>
        </>
    )



}

export default AuthContextProvider;
