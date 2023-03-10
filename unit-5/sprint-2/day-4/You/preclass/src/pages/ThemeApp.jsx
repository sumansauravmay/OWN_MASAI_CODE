import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {toggleTheme} from "../redux/theme/theme.action";


const ThemeApp=()=>{
    
    const dispatch=useDispatch();

const theme=useSelector((state)=>state.themeManager.theme);


return (
    <div  style={{backgroundColor:theme}}>
        <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
)


}
export default ThemeApp;

