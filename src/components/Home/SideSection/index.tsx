/* eslint-disable no-nested-ternary */
import { Box } from "@chakra-ui/react";
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
    <>
      <Box
        css={css`
          ${isLargerW &&
          css`
            position: sticky;
            top: 20px;
          `}
        `}
        opacity={isOpen ? 1 : 0}
        zIndex={isOpen ? 1 : -1}
        transition={isOpen ? "opacity 2s ease 1.7s" : ""}
      >
        {/* {" "} */}
        <DatePickerView />
      </Box>
      {/* <FloatBtn /> */}

      {/*  */}
    </>
  );
};
