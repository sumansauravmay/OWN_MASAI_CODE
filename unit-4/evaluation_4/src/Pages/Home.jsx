import React,{useEffect,useState} from "react";
import axios from "axios";
import {GridItem,Grid, Container,Box,Image,VStack,Text,Button} from "@chakra-ui/react";
   import {CartContext} from "../Context/CartContext/CartContextProvider";
   import {addToCart} from "../Context/CartContext/action";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

let getData=()=>{
  return axios.get(`https://fakestoreapi.com/products`)
}

const itemAlreadyExist=(id,cartItems)=>{
if(cartItems.find((item)=>item.id===id))
{
  return true;
}
return false;
}

const Home = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false)
  const [isError,setIsError]=useState(false)

  useEffect(()=>{
    setLoading(true)
    getData()
    .then((res)=>{
      setData(res.data)
      setLoading(false)
      setIsError(false)
    })
    .catch(()=>{
      setIsError(false)
      setData([])
    })
  },[])

 const {state,dispatch}=React.useContext(CartContext)


if(loading)
{
  return <h1>...Loading</h1>
}
if(isError)
{
  return alert("Something went wrong")
}

  return <div>
     <Container>
<Grid w="full" ml="-200px" templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}}
 gap={40}>
  {
    data.map((item)=>(
      <GridItem key={item.id}>
        <VStack w="200px">
        
        <Box>
            <Image src={item.image}/>
          </Box>
        
         
          <Box>
          <Text>{item.title}</Text>
          </Box>
          <Box>
          <Text>INR : {item.price}</Text>
          </Box>
          <Box>
          <Button colorScheme='blue'
          onClick={()=>dispatch(addToCart(item))} disabled={itemAlreadyExist(item.id,state)}
          >Add to Cart</Button>
          {/* disabled={itemAlreadyExist(item.id,state)} */}
          {/* <Button colorScheme='blue' disabled={loading}>Add to Cart</Button> */}
          </Box>
        </VStack>
      </GridItem>
    ))
  }
</Grid>
    </Container>
    
  
  </div>;
};

export default Home;
