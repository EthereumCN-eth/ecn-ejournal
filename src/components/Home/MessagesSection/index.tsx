import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { useSelectDayMessages } from "../query/queries";
import { dateStrAtom, dayAtom } from "../state";

import { MessageItemWrapper } from "./MessageItemWrapper";
import { MetaCard } from "./MetaCard";

export const MessagesSection = () => {
  const [dateStr] = useAtom(dateStrAtom);
  const [day] = useAtom(dayAtom);
  // console.log(day);
  const { data: msgs } = useSelectDayMessages({ dateStr, day });

  if (!msgs) return null;

  return (
    <Flex w="full" height="fit-content" direction="column" align="flex-start">
      {/*  */}
      {msgs.map((msg) => {
        return (
          <MessageItemWrapper key={msg.id} msg={msg}>
            <MetaCard
              siteName="Youtube"
              title="Title: New Order's predictions for how crypto and Web3 move forward in 2023."
              description="New Order's predictions for how crypto and Web3 move forward in 2023."
              imageUrl="https://chakra-ui.com/og-image.png"
            />
          </MessageItemWrapper>
        );
      })}
    </Flex>
  );
};
