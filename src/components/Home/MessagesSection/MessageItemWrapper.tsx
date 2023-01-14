import { Avatar, Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { format } from "date-fns";

import type { MessageType } from "../types";

export const MessageItemWrapper = ({
  msg,
  children = null,
}: {
  msg: MessageType;
  children?: React.ReactNode;
}) => {
  return (
    <Flex
      direction="column"
      w="100%"
      pr="10%"
      h="fit-content"
      py="32px"
      borderBottom="1px solid #3D3D3D"
    >
      <HStack mb="12px">
        <Avatar boxSize="32px" src={msg.user.discordAvatar} />
        <Text
          css={css`
            padding-left: 8px;
            padding-right: 24px;
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 600;
            font-size: 0.9rem;
            /* line-height: 20px; */

            color: #5b6cd9;
          `}
        >
          {msg.user.name}
        </Text>
        <Text
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 600;
            font-size: 0.9rem;
            /* line-height: 20px; */

            color: #aaaaaa;
          `}
        >
          {format(new Date(msg.verifiedAt), "M/dd/yyyy")}
        </Text>
      </HStack>
      <Box mb="12px">
        <Text
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.37rem;

            color: #ffffff;
          `}
        >
          {msg.expressMessage}
          {"  "}
          <Link
            display="inline"
            color="#3366BB"
            href={msg.expressUrl}
            target="_blank"
          >
            {msg.expressUrl}
          </Link>
        </Text>
      </Box>

      {children}
    </Flex>
  );
};
