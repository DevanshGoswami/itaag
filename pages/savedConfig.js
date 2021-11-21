import React, {useContext} from "react";
import {
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from "@chakra-ui/react";
import Head from "next/head";
import { AiFillEdit } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import { ConfigContext } from "../context/savedConfig.context";

export default function savedConfig() {

  const { saved, setSaved } = useContext(ConfigContext)
  console.log(saved)

  const header = ['name', 'type', 'created', 'actions'];
  const data = [
    { name: 'Daggy', created: '7 days ago' },
    { name: 'Anubra', created: '23 hours ago' },
    { name: 'Josef', created: 'A few seconds ago' },
    { name: 'Sage', created: 'A few hours ago' },
  ];

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
      <Table
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        display={{
          base: 'block',
          md: 'table',
        }}
        sx={{
          '@media print': {
            display: 'table',
          },
        }}
      >
        <Thead
          display={{
            base: 'none',
            md: 'table-header-group',
          }}
          sx={{
            '@media print': {
              display: 'table-header-group',
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: 'block',
            lg: 'table-row-group',
          }}
          sx={{
            '@media print': {
              display: 'table-row-group',
            },
          }}
        >
          {saved.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: 'grid',
                  md: 'table-row',
                }}
                sx={{
                  '@media print': {
                    display: 'table-row',
                  },
                  gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)',
                  gridGap: '10px',
                }}
              >
              <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color: useColorModeValue('gray.400', 'gray.400'),
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        {token.type === 'api' ? token.config.url : token.config.service_name }
                  </Td>
                  <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color: useColorModeValue('gray.400', 'gray.400'),
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        {token.type}
                  </Td>
                  <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color: useColorModeValue('gray.400', 'gray.400'),
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        {token.created}
                  </Td>
                  <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color: useColorModeValue('gray.400', 'gray.400'),
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        
                  </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      </GridItem>
 </SimpleGrid>
      </Box>
      </Box>
  );
}

