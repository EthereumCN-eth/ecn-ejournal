/* eslint-disable no-nested-ternary */
import { Box, Center, IconButton, useMediaQuery } from "@chakra-ui/react";
import { useAtom } from "jotai";
import "react-day-picker/dist/style.css";
import {
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowUpCircle,
} from "react-icons/bs";

import { DatePickerView } from "./DatePickerView";
import { isExpandAtom } from "./isExpanedAtom";

const Icon = ({
  isOpen,
  isLargerW,
}: {
  isOpen: boolean;
  isLargerW: boolean;
}) => {
  if (isLargerW) {
    return isOpen ? (
      <BsArrowLeftCircle size="2rem" />
    ) : (
      <BsArrowRightCircle size="2rem" />
    );
  } else {
    return isOpen ? (
      <BsArrowUpCircle size="2rem" />
    ) : (
      <BsArrowDownCircle size="2rem" />
    );
  }
};

export const SideSection = () => {
  const [isOpen, toggle] = useAtom(isExpandAtom);
  const [isLargerW] = useMediaQuery("(min-width: 1100px)");
  // console.log("isOpen", isOpen);
  const insetStr = isLargerW ? "50% 0 auto auto" : "100% auto auto auto";
  const transformStr = isOpen
    ? isLargerW
      ? "translate(50%, -50%)"
      : "translateY(-50%)"
    : isLargerW
    ? "translate(0%, -50%)"
    : "translateY(-100%)";
  return (
    <>
      <Box
        opacity={isOpen ? 1 : 0}
        transition={isOpen ? "opacity 2s ease" : ""}
      >
        {/* {" "} */}
        <DatePickerView />
      </Box>
      <Center
        position="absolute"
        inset={insetStr}
        transform={transformStr}
        zIndex={10}
      >
        <IconButton
          onClick={() => toggle()}
          variant="unstyled"
          display="flex"
          // bgColor="white"
          aria-label="expand-collpase"
          icon={<Icon isLargerW={isLargerW} isOpen={isOpen} />}
        />
      </Center>
      {/*  */}
    </>
  );
};
