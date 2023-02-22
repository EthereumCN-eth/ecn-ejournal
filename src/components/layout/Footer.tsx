import { Flex, Link, HStack, Divider, IconButton } from "@chakra-ui/react";
import { AiFillWechat } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const SmallWithNavigation = () => {
  return (
    <Flex width="full">
      <Flex
        // minH="308px"
        // spacing={6}
        gap={6}
        direction={["column", "column", "column", "row"]}
        color="white"
      >
        <Link target="_blank" href="http://ethereum.cn/">
          ETHEREUM.CN
        </Link>
        <Link target="_blank" href="https://ethgifts.com/">
          ETHGIFTS
        </Link>
        <Link target="_blank" href="https://ecnpodcast.fireside.fm/">
          ECN PODCAST
        </Link>
        <Link target="_blank" href="https://devcon.app/">
          DEVCON.APP
        </Link>
      </Flex>
    </Flex>
  );
};
const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      maxW="1200px"
      p="40px"
      // direction={["column", "row"]}
      position="relative"
    >
      <Divider
        position="absolute"
        top="0"
        maxW="1200px"
        w="calc(100% - 80px)"
      />
      <SmallWithNavigation />
      <HStack spacing={6}>
        <IconButton
          onClick={() => {
            window.open("https://twitter.com/EthereumCN", "_blank");
          }}
          aria-label="twitter"
          icon={<FaTwitter />}
        />
        <IconButton
          onClick={() => {
            window.open("https://discord.gg/KUywx3JJJU", "_blank");
          }}
          aria-label="discord"
          icon={<FaDiscord />}
        />
        <IconButton
          onClick={() => {
            window.open(
              "https://i.ibb.co/mBgmDgF/footer-wechat.webp",
              "_blank"
            );
          }}
          aria-label="wechat"
          icon={<AiFillWechat />}
        />
      </HStack>
    </Flex>
  );
};

export default Footer;
