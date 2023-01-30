/* eslint-disable no-nested-ternary */
import { Button, Flex, Image } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom } from "jotai";

import { isExpandAtom } from "../state/isExpanedAtom";
import { useIsDesktopQuery } from "../state/useIsDesktopQuery";

import { DatePickerView } from "./DatePickerView";
// import { FloatBtn } from "./FloatBtn";

export const SideSection = () => {
  const [isOpen] = useAtom(isExpandAtom);
  const [isLargerW] = useIsDesktopQuery();
  // console.log("isOpen", isOpen);

  return (
    <Flex
      css={css`
        ${isLargerW &&
        css`
          position: sticky;
          top: 20px;
        `}
      `}
      direction="column"
      opacity={isOpen ? 1 : 0}
      zIndex={isOpen ? 1 : -1}
      transition={isOpen ? "opacity 2s ease 1.7s" : ""}
    >
      {/* {" "} */}
      <DatePickerView />

      {/* <FloatBtn /> */}
      <Button
        mt="20px"
        w="full"
        variant="join"
        color="#fff"
        px="74px"
        py="10px"
        aria-label="rs-btn"
        minH="48px"
        css={css`
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.37rem;
        `}
        cursor="pointer"
        leftIcon={<Image alt="rss" src="/rss.svg" w="24px" h="24px" />}
      >
        订阅 E 群誌
      </Button>
      {/*  */}
    </Flex>
  );
};
