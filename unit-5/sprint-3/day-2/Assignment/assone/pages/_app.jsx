import Navbar from '../components/navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <main>
    <ChakraProvider>
    <Navbar/>
<Component {...pageProps} />
    </ChakraProvider>
    </main>
  ) 
  
  
}

export default MyApp
