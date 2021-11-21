import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { ConfigContextProvider } from '../context/savedConfig.context'

function MyApp({ Component, pageProps }) {
  return(
    <ConfigContextProvider>
    <ChakraProvider>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </ConfigContextProvider>
  );
}

export default MyApp
