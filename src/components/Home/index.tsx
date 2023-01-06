/* eslint-disable no-nested-ternary */
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { NextSeo } from "next-seo";

import { useMonthMsgQuery } from "@/query/queries";

import { isExpandAtom } from "./isExpanedAtom";
import { SideSection } from "./SideSection";

// eslint-disable-next-line sonarjs/cognitive-complexity
const Home = () => {
  useMonthMsgQuery({ dateStr: "2022-11" });
  const [isOpen] = useAtom(isExpandAtom);
  const [isLargerW] = useMediaQuery("(min-width: 1100px)");
  const toolSideW = isLargerW
    ? isOpen
      ? "30%"
      : "2.5rem"
    : isOpen
    ? "100%"
    : "2.5rem";
  const contentW = isLargerW ? (isOpen ? "70%" : "100%") : "100%";
  const toolSideH = isLargerW
    ? isOpen
      ? "calc(100vh - 100px)"
      : " 2.5rem"
    : isOpen
    ? "320px"
    : "2.5rem";
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
        pt="5px"
        position="relative"
        maxW="1200px"
      >
        <Flex
          direction="column"
          align="center"
          w={toolSideW}
          h={toolSideH}
          position="relative"
          borderRadius={isOpen ? "0" : "100%"}
          transition={
            isOpen
              ? "width 0.5s ease, height 1s ease "
              : "width 0.5s ease, height 1s ease 0.5s, border-radius 0.5s ease 1.5s"
          }
          bgColor="gray.100"
        >
          <SideSection />
        </Flex>

        <Box
          // eslint-disable-next-line no-nested-ternary
          w={contentW}
          // w={["100%", isOpen ? "70%" : "100%"]}
          minHeight="calc(100vh - 100px)"
          // bgColor="red.100"
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
