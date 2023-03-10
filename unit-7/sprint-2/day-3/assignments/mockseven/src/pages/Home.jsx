import React from 'react';
import { Flex, Spacer,Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Flex mt="50px">
    <Box p='4'>
<Link to="/register">
      Register
      </Link>
    </Box>

    <Spacer />
    <Box p='4'>
    <Link to="/login">
      Login
      </Link>
    </Box>

    <Spacer />

    <Box p='4'>
    <Link to="/dashboard">
      Dashboard
      </Link>
    </Box>
    <Spacer />
    <Box p='4'>
    <Link to="/stocks">
    Stocks
    </Link>
    </Box>
    <Spacer />
    <Box p='4'>
    <Link to="/portfolio">
      Portfolio
      </Link>
    </Box>
  </Flex>
  )
}

export default Home