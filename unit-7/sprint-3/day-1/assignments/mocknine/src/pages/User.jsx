import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Button,
    Heading ,Select,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import {useDispatch,useSelector} from "react-redux";
import { useraction } from '../redux/User/user.action';
  
  

const User = () => {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("")
    const [difficult,setDifficult]=useState("")
    const [numberq,setNumberq]=useState(10);

   const dispatch=useDispatch();
const userdata=useSelector((store)=>store.authManager)
console.log("userdata",userdata)

const getData= {
    amount: numberq,
    difficulty: difficult,
    category: category,
  
};

    React.useEffect(() => {
        dispatch(useraction());
      },[]);

    const handlestartquiz=(e)=>{
        e.preventDefault() 
          dispatch(useraction(getData))
          .then((res)=>console.log("Yes"))

    }

  return (
    <div>
         <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w="60%">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Set up your quiz</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              {/* <FormLabel>Email address</FormLabel> */}
              <Input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter Your name'/>
            </FormControl>
           

            <Select onChange={(e)=>setCategory(e.target.value)}
          placeholder="Select category"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md">
          <option value={"General Knowledge"}>General Knowledge</option>
          <option value={"Sports"}>Sports</option>
          <option value={"Geography"}>Geography</option>
        </Select>

        <Select onChange={(e)=>setDifficult(e.target.value)}
          placeholder="Select difficulty"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md">
          <option  value={"Easy"}>Easy</option>
          <option  value={"Medium"}>Medium</option>
          <option  value={"Hard"}>Hard</option>
        </Select>

        <FormControl id="number">
              {/* <FormLabel>Password</FormLabel> */}
              <Input onChange={(e)=>setNumberq(e.target.value)}
               type="number" placeholder='choose number of question'/>
            </FormControl>

            <Stack spacing={10}>
              <Button onClick={handlestartquiz}
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                Start Quiz
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default User
