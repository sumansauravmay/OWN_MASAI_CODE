import React from "react";
import CartItem from "./CartItem"

function Cart(){
    const [data,setData]=React.useState([
        { name:"noodals",price:30,quantity:1,id:1},

        { name:"Briyani", price:90,quantity:1,id:2},
        
        {name:"Chips",price:10,quantity:1,id:3}
    ])

    const TotalAmount=data.reduce((prevValue,currValue)=>{
        return prevValue+(currValue.price * currValue.quantity)
    },0)

 const incQuantity=(id)=>{
    const quantityAfterUpdate=data.map((item)=>
    item.id===id?{...item,quantity:item.quantity+1}:item
    )
setData(quantityAfterUpdate)
 }   

 const decQuantity=(id)=>{
    const quantityAfterUpdate=data.map((item)=>
    item.id===id?{...item,quantity:item.quantity-1}:item
    )
setData(quantityAfterUpdate)
 }   



    return (
        <div style={{height:"1000px"}}>
        <h1>My Restaurant</h1>
        <div style={{border:"1px solid yellow",width:"800px",height:"600px",marginLeft:"250px",marginTop:"50px"}}>
{
    
    data.map((item)=>(
        
<CartItem key={item.id} name={item.name} price={item.quantity*item.price}  quantity={item.quantity} 
incQuantity={incQuantity} decQuantity={decQuantity} id={item.id}/>

    ))
   
    }
    <h1 style={{color:"red"}}>Total : {TotalAmount}</h1>
        </div>

        </div>
    )
}
export default Cart;