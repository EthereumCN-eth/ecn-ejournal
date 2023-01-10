/* eslint-disable no-nested-ternary */
import { Center, IconButton } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  // BsArrowDownCircle,
  BsArrowLeftCircle,
  // BsArrowRightCircle,
  BsArrowUpCircle,
  BsFilterCircle,
} from "react-icons/bs";

import { isExpandAtom } from "../state/isExpanedAtom";
import { useIsDesktopQuery } from "../state/useIsDesktopQuery";

export const Icon = ({
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
      // <BsArrowRightCircle size="2rem" />
      <BsFilterCircle size="2rem" />
    );
  } else {
    return isOpen ? (
      <BsArrowUpCircle size="2rem" />
    ) : (
      // <BsArrowDownCircle size="2rem" />
      <BsFilterCircle size="2rem" />
    );
  }
};

export const FloatBtn = () => {
  const [isOpen, toggle] = useAtom(isExpandAtom);
  const [isLargerW] = useIsDesktopQuery();
  const insetStr = isLargerW
    ? `calc(${isOpen ? "160px" : "50%"}) 0 auto auto`
    : "auto auto 0 auto";
  const transformStr = isOpen
    ? isLargerW
      ? "translate(50%, -50%)"
      : "translateY(50%)"
    : isLargerW
    ? "translate(0%, -50%)"
    : "translateY(0%)";
  return (
    <Center
      position="absolute"
      inset={insetStr}
      transform={transformStr}
      zIndex={10}
      bgColor="gray.100"
      borderRadius="50%"
      transition="all 0.5s ease"
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
  );
};
