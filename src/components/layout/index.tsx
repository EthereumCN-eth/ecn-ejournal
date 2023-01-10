import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
    <Flex align="center" direction="column" width="full" bgColor="#131313">
      <Header />

      {children}
      <Footer />
    </Flex>
    // </Box>
  );
};

export default Layout;
