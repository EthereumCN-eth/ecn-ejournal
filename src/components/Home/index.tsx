/* eslint-disable no-nested-ternary */
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { NextSeo } from "next-seo";

import { isExpandAtom } from "./isExpanedAtom";
import { SideSection } from "./SideSection";

const Home = () => {
  const [isOpen] = useAtom(isExpandAtom);
  const [isLargerW] = useMediaQuery("(min-width: 1100px)");
  const toolSideW = isLargerW ? (isOpen ? "30%" : "2.5rem") : "100%";
  const contentW = isLargerW ? (isOpen ? "70%" : "100%") : "100%";
  const toolSideH = isLargerW ? "auto" : isOpen ? "320px" : "2.5rem";
  return (
    <>
      <NextSeo title="ECN Express" />

      <Flex
        direction={isLargerW ? "row" : "column"}
        // alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        px="40px"
        w="full"
        position="relative"
      >
        <Flex
          direction="column"
          align="center"
          w={toolSideW}
          h={toolSideH}
          position="relative"
          transition="all 0.5s ease"
          bgColor="gray.100"
        >
          <SideSection />
        </Flex>

        <Box
          // eslint-disable-next-line no-nested-ternary
          w={contentW}
          // w={["100%", isOpen ? "70%" : "100%"]}
          minHeight="calc(100vh - 100px)"
          bgColor="red.100"
          transition="all 0.5s ease"
        >
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
