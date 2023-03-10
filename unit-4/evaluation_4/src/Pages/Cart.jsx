import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout,removeFromCart } from "../Context/CartContext/action";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {
  const {state,dispatch}=useContext(CartContext)
  
  

 const handleCheckOut=()=>{
   dispatch(checkout)

alert("Are you sure you want to place this order ?")
 }

  return (
<>
  {
    state.map((cart)=>(
      <div key={cart.id} style={{display:"flex",justifyContent:"space-evenly",marginTop:"30px"}}>
        <h4>{cart.title}</h4>
        <p>{cart.price}</p>
        <button style={{width:"80px",background:"black",color:"white"}}
         onClick={()=>dispatch(removeFromCart(cart.id))}>Remove</button>
      </div>
      
    ))
  }

<div style={{marginLeft:"800px",marginTop:"20px",display:"flex"}}>
<h2>Total Price :</h2>
  {
    
    state.reduce((a,c)=>a+c.price,0)
    
  }
</div>

  <button style={{width:"50px",background:"black",margin:"200px",color:"white",marginLeft:"60px"}} 
  onClick={handleCheckOut}
  >Placed</button>
  </>
  ) 
  
};

export default Cart;
