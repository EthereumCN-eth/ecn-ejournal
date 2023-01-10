import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

import { fontSize } from "@/styles/vars";

const Header = () => {
  return (
    <Flex
      // bgColor="red.100"
      direction={["column", "row"]}
      minH="308px"
      as="header"
      width="full"
      maxW="1200px"
      p="40px"
      align="center"
      justify="space-between"
      position="relative"
      color="#ffffff"
    >
      <Center
        // bgColor="yellow"
        w="30%"
        minH="168px"
      >
        <Heading
          css={css`
            font-size: ${fontSize[32]};
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 600;
          `}
        >
          E群誌
        </Heading>
      </Center>
      <VStack
        align={["center", "flex-start"]}
        justify="center"
        // bgColor="green"
        w="70%"
        minH="168px"
      >
        <Text
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 500;
            font-size: ${fontSize[16]};
            margin-bottom: 12px;
          `}
        >
          E 群誌是 ECN
          推出的一个社区协作编辑企划，让社区成员以“简短一句中文概述+来源链接”的格式把自己看到的最新、重要、有趣的资讯在
          ECN Discord 的 E 群誌-ejournal 频道分享和讨论。ECN
          对当天的消息进行简单审核后汇总，形成日报发布，并在 Notion 归档。
        </Text>
        <Button variant="join" color="#E1722F" px="74px" py="10px">
          加入Discord
        </Button>
      </VStack>

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
