import React, {useContext} from "react";
import {
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import Head from "next/head";
import { ConfigContext } from "../context/savedConfig.context";

export default function savedConfig() {

  const { saved, setSaved } = useContext(ConfigContext)

  const downLoadItem = (item) => {
    let file = new File([JSON.stringify(item.config)], "config.json", {
      type: "application/json",
    });
    let url = URL.createObjectURL(file);
    let a = document.createElement("a");
    a.setAttribute("download", "config.json");
    a.setAttribute("href", url);
    a.click();
  }

  const renderRow = (save, index) => {
    return save && <Tr index = {index}> 
      <Td>{save.type === 'api' ? save.config.url : save.config.service_name }</Td>
      <Td>{save.type}</Td>
      <Td>{save.created}</Td>
      <Td _hover={{cursor: 'pointer'}} color="red.300" onClick={() => setSaved(saved.filter( item => item !== save ))}>Delete</Td>
      <Td _hover={{cursor: 'pointer'}} color="blue.100" onClick={() => downLoadItem(save)}>Download</Td>
    </Tr>
  } 

  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
        <Head>
            <title>Saved Configs</title>
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
              Saved Configurations
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Here you can access previous configurations
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
          <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Type</Th>
                    <Th>Created At</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {saved.map(renderRow)}
                  </Tbody>
              </Table>
          </GridItem>
 </SimpleGrid>
      </Box>
      </Box>
  );
}

