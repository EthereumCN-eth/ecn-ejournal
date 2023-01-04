import { Box, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="ECN Express" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        px="40px"
        w="full"
      >
        <Box w="30%" minHeight="calc(100vh - 100px)" bgColor="green.100">
          {/*  */}
        </Box>
        <Box w="70%" minHeight="calc(100vh - 100px)" bgColor="red.100">
          {/*  */}
        </Box>

        {/* <SomeText />
      <SomeImage />
      <CTASection /> */}
      </Flex>
    </>
  );
};

export default Home;
