import React from "react";
import {Link} from "react-router-dom";
import {Spacer,ButtonGroup,Heading,Box,Flex,HStack} from "@chakra-ui/react"
// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

// const links=[
//   {path:"/", title:"HOME"},
//   {path:"/login", title:"LOGIN"},
//   {path:"/cart", title:"CART"}
// ]

const Navbar = () => {
  return (
    <div>

<Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Token is {Date.now()}</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
  <HStack>
   <Link to="/">HOME</Link>
   <Link to="/login">LOGIN</Link>
   <Link to="/cart">Cart</Link>
   </HStack>
  </ButtonGroup>
</Flex>


      {/* {
        links.map((link)=>(
          <Link key={link.path} to={link.path}>{link.title}</Link>
        ))
      } */}
    </div>
  )
};

export default Navbar;
