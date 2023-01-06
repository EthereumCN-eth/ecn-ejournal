import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      // bgColor="red.100"
      h="100px"
      as="header"
      width="full"
      maxW="1200px"
      p="40px"
      align="center"
      justify="space-between"
      position="relative"
    >
      <Heading>E群志</Heading>
      <Box>
        <ThemeToggle />
      </Box>
      <Divider
        position="absolute"
        bottom="0"
        maxW="1200px"
        w="calc(100% - 80px)"
      />
    </Flex>
  );
};

export default Header;
