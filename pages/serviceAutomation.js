import React, {useState, useContext} from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ConfigContext } from "../context/savedConfig.context";

const schema = yup.object().shape(
  {
    service_name: yup.string().required()
  }
)

export default function serviceAutomation() {

  const { saved, setSaved } = useContext(ConfigContext)

  const [operation, setOperation] = useState("Start");

  const { register, handleSubmit, formState: {errors} }  = useForm({
    resolver: yupResolver(schema)
  })

  const submitForm = (data) => {
    const configForJSON = {...data, operation}
<<<<<<< Updated upstream
    let file = new File([JSON.stringify(configForJSON)], "config.json", {
      type: "application/json",
    });
    let url = URL.createObjectURL(file);
    let a = document.createElement("a");
    a.setAttribute("download", "config.json");
    a.setAttribute("href", url);
    a.click();
=======
    let now = new Date();
    setSaved([...saved, { 
        type: 'service', 
        config: configForJSON, 
        created: now.toUTCString()
      }])
    console.log(configForJSON)
>>>>>>> Stashed changes
  }


  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
        <Head>
            <title>Service Automation</title>
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
                Service Automation
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                This tab is for configuring services for automation.
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
                      Service Name
                    </FormLabel>
                      <Input
                        type="text"
                        {...register('service_name')}
                        name="service_name"
                        placeholder="MongoDB"
                        focusBorderColor="brand.400"
                        rounded="md"
                      />
                      <Text fontSize="12px" color="red.400">{errors.service_name?.message}</Text>
                  </FormControl>
                </SimpleGrid>
                <RadioGroup onChange={setOperation} value={operation}>
                <Stack direction="row">
                    <Radio value="Start">Start</Radio>
                    <Radio value="Stop">Stop</Radio>
                    <Radio value="Restart">Restart</Radio>
                </Stack>
                </RadioGroup>
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
