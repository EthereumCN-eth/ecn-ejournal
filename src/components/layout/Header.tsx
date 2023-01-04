import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex direction="column" align="center">
      <Flex
        // bgColor="red.100"
        h="100px"
        as="header"
        width="full"
        p="40px"
        align="center"
        justify="space-between"
      >
        <Heading>E群志</Heading>
        <Box>
          <ThemeToggle />
        </Box>
      </Flex>
      <Divider w="calc(100% - 80px)" />
    </Flex>
  );
};

export default Header;
