import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const handleDownload = (type) => {
    let a = document.createElement("a");
    a.setAttribute("download", `${type}_executable.exe`);
    if (type === "api") {
      a.setAttribute("href", "/requestMaker.exe");
    } else if (type === "service") {
      a.setAttribute("href", "/serviceManager.exe");
    }
    a.click();
  };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>ITAAG.</title>
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            itaag.
          </Heading>
          <Text color={"gray.500"}>IT Automation Application Generator</Text>
          <Box>
            <Button
              bg={"blue.400"}
              color={"white"}
              type="submit"
              _hover={{
                bg: "blue.500",
              }}
              margin="10px"
              onClick={() => handleDownload("api")}
            >
              Download API Automation EXE
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              type="submit"
              _hover={{
                bg: "blue.500",
              }}
              margin="10px"
              onClick={() => handleDownload("service")}
            >
              Download Service Automation EXE
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
