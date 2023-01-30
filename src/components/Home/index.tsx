/* eslint-disable no-nested-ternary */
import { Box, Flex } from "@chakra-ui/react";
import useSize from "@react-hook/size";
import { useAtom } from "jotai";
import { NextSeo } from "next-seo";
import { useRef } from "react";

import { MessagesSection } from "./MessagesSection";
import { SideSection } from "./SideSection";
import { isExpandAtom } from "./state/isExpanedAtom";
import { useIsDesktopQuery } from "./state/useIsDesktopQuery";

// eslint-disable-next-line sonarjs/cognitive-complexity
const Home = () => {
  // useMonthMsgQuery({ dateStr: "2022-11" });
  const [isOpen] = useAtom(isExpandAtom);
  const [isLargerW] = useIsDesktopQuery();

  const contentSectionRef = useRef(null);
  const [, height] = useSize(contentSectionRef);
  const toolSideW = isLargerW
    ? isOpen
      ? "35%"
      : "2.5rem"
    : isOpen
    ? "100%"
    : "2.5rem";
  const contentW = isLargerW ? (isOpen ? "65%" : "100%") : "100%";
  const toolSideH = isLargerW
    ? isOpen
      ? height
        ? `${height}px`
        : "calc(100vh - 100px)"
      : " 2.5rem"
    : isOpen
    ? "330px"
    : "2.5rem";
  // console.log("heigth", height);
  // const toolSideMinH = isLargerW ? "calc(100vh - 100px)" : "320px";

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
        pt="60px"
        // position="fixed"
        maxW="1200px"
      >
        <Flex
          direction="column"
          // align="center"
          align={isLargerW ? "flex-start" : "center"}
          w={toolSideW}
          minH={toolSideH}
          position="relative"
          borderRadius={isOpen ? "0" : "100%"}
          // minH={toolSideMinH}
          transition={
            isLargerW
              ? isOpen
                ? "width 0.5s ease , height 1s ease"
                : "width 0.5s ease, height 1s ease 0.5s, border-radius 0.5s ease 1.5s"
              : isOpen
              ? "height 0.5s ease , width 1s ease 0.6s"
              : "height 0.5s ease, width 1s ease 0.5s, border-radius 0.5s ease 1.5s"
          }
          // bgColor="gray.100"
        >
          <SideSection />
        </Flex>

        <Box
          ref={contentSectionRef}
          // eslint-disable-next-line no-nested-ternary
          w={contentW}
          h="fit-content"
          // w={["100%", isOpen ? "70%" : "100%"]}
          minHeight="calc(100vh - 308px)"
          // bgColor="red.100"
          // transition={isOpen ? "all 0.5s ease 0.5s" : "all 0.5s ease "}
        >
          {/*  */}
          <MessagesSection />
        </Box>

        {/* <SomeText />
      <SomeImage />
      <CTASection /> */}
      </Flex>
    </>
  );
};

export default Home;
