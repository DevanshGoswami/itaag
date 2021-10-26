import React, {useState} from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Select
} from "@chakra-ui/react";
import Head from "next/head";
import HeaderForm from "../components/API/HeaderForm";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape(
  {
    url: yup.string().url().required(),
    body: yup.string().required(),
    method: yup.string().required(),
  }
)

export default function apiAutomation() {

  const [headers, setHeaders] = useState([
    {
      name: 'content-type',
      value: 'application-json'
    }
  ]);

  const { register, handleSubmit, formState: {errors} }  = useForm({
    resolver: yupResolver(schema)
  })

  const submitForm = (data) => {
    const configForJSON = {...data, headers}
    console.log(configForJSON)
  }

  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
        <Head>
            <title>API Automation</title>
        </Head>
      <Box>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                API Automation
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                This tab is for configuring API requests for automation.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              onSubmit={handleSubmit(submitForm)}
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
                p={{ sm: 6 }}
              >
                <SimpleGrid columns={3} spacing={6}>
                  <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      URL
                    </FormLabel>
                      <Input
                        type="text"
                        {...register('url')}
                        name="url"
                        placeholder="www.example.com/api"
                        focusBorderColor="brand.400"
                        rounded="md"
                      />
                      <Text fontSize="12px" color="red.400">{errors.url?.message}</Text>
                  </FormControl>
                </SimpleGrid>

                <div>
                  <FormControl id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Request Body 
                    </FormLabel>
                    <Textarea
                      placeholder="{ name: '', email: '', account_no: '' }"
                      mt={1}
                      rows={3}
                      {...register('body')}
                      name="body"
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: "sm" }}
                    />
                    <Text fontSize="12px" color="red.400">{errors.body?.message}</Text>
                    <FormHelperText>
                      The request must be in JSON format.
                    </FormHelperText>
                  </FormControl>
                </div>
                <div>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="method"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Request Method
                    </FormLabel>
                    <Select
                      id="method"
                      name="method"
                      autoComplete="country"
                      {...register('method')}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                    </Select>
                    <Text fontSize="12px" color="red.400">{errors.method?.message}</Text>
                  </FormControl>
                </div>
                <div>
                    <HeaderForm headers={headers} setHeaders={setHeaders} />
                </div>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
              >
            <Button
                bg={'blue.400'}
                color={'white'}
                type="submit"
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
            </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      </Box>
  );
}
