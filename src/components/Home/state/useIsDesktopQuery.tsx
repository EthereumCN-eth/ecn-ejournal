import { useMediaQuery } from "@chakra-ui/react";

export const useIsDesktopQuery = () => {
  return useMediaQuery("(min-width: 1000px)");
};
