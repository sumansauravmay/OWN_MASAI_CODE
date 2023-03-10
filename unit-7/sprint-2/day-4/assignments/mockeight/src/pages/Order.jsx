import React from 'react'

const Order = () => {

  let data=JSON.parse(localStorage.getItem("order"))||[];
  console.log(data)

  return (
    <div>
      <h1 style={{marginBottom:"50px"}}>Total product placed: {data.length}</h1>
       {
        data.map((item)=>(
          <div key={item.id}>
          <img style={{margin:"auto"}} src={item.image} alt="prod_cart"/>
          <p>{item.title}</p>
          <p>{item.brand}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>

                      </div>
                  )
        )
         
        }
    </div>
  )
}

export default Order