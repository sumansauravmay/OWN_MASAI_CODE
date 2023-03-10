import React from "react";



function CartItem({name,price,id,quantity,incQuantity,decQuantity}){

    return (
        <div style={{color:"red"}}>
        
          <div style={{display:"flex",marginTop:"50px"}}>

            <h3 style={{marginLeft:"200px"}}>{name}</h3>

            <h3 style={{marginLeft:"100px"}}>{price}</h3>

            <button style={{marginLeft:"100px",height:"20px",marginTop:"15px",backgroundColor:"transparent",border:'0px',fontSize:"25px",color:"red"}} disabled={quantity===0} 
            onClick={()=>decQuantity(id)}>-</button>

            <span style={{marginLeft:"30px",marginTop:"20px"}}>{quantity}</span>

            <button style={{marginLeft:"30px",height:"20px",marginTop:"15px",backgroundColor:"transparent",border:'0px',fontSize:"25px",color:"red"}}
             onClick={()=>incQuantity(id)}>+</button>
        </div>
         </div>
    )
}
export default CartItem;