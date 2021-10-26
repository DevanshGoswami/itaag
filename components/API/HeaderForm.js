import React, {useState} from "react";
import {
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Text,
  Button,
  Box,
  Table,
    Tbody,
    Tr,
    Td
} from "@chakra-ui/react";


export default function HeaderFßorm({headers, setHeaders}) {
  
  const defaultValue = {name:'',value:''}

  const [data, setData] = useState(defaultValue)
  const [errorMessage, setMessage] = useState(false)

  const addUser = () => {
      if(data.name === '' || data.value === ''){
        setMessage(true)
      }
      else{
        setHeaders(prevState => [...prevState, data])
        setData(defaultValue)
      }
  }

  const handleChange = (e) => {
    setMessage(false)
    const {name , value} = e.target
    setData( prevState => ({
        ...prevState,
        [name] : value
    }))
  }

  return (
    <>
    <Text>
        Headers
    </Text>
    <Box textAlign="center" margin="20px">
        {headers.length === 0 ? <Text fontSize="13px">
            No headers added.
        </Text>
        :
        <Table variant="simple">
            <Tbody>
                {headers.map((header,index) => {
                    return(
                    <Tr key={index}>
                        <Td color="grey">'{header.name}'</Td>
                        <Td color="grey">'{header.value}'</Td>
                        <Td color="red.300" _hover={{cursor: "pointer"}} onClick={() => {
                            setHeaders(headers.filter((obj) => obj !== header))
                        }}>Delete</Td>
                    </Tr>
                    );
                })}
            </Tbody>
        </Table>    
                }
    </Box>
    <HStack justifyContent="center">
    <Box>
    <FormControl>
    <FormLabel
        htmlFor="name"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
    >
        Name
    </FormLabel>
    <Input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        placeholder='"content-type"'
        autoComplete="given-name"
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
    />
    </FormControl>
    </Box>
    <Box>
    <FormControl>
    <FormLabel
        htmlFor="value"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
    >
        Value
    </FormLabel>
    <Input
        type="text"
        name="value"
        onChange={handleChange}
        id="value"
        autoComplete="family-name"
        placeholder='"application-json"'
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
    />
    </FormControl>
    </Box>
    <Box textAlign="right">
    <Button
                bg={'green.400'}
                color={'white'}
                mt={8}
                onClick={addUser}
                _hover={{
                  bg: 'green.500',
                }}>
                Add
    </Button>
    </Box>
    </HStack>
    <Box textAlign="center" mt={4}>
        {errorMessage && <Text color="red.500" fontSize="13px">Both fields are required</Text>}
    </Box>
 </>
  );
}
