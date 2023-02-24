import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom } from "jotai";
// import { TwitterTweetEmbed } from "react-twitter-embed";

import { useSelectDayMessages } from "../query/queries";
import { dateStrAtom, dayAtom } from "../state";

import { MessageItemWrapper } from "./MessageItemWrapper";
import { MetaCard } from "./MetaCard";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

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
        if (!msg.metaData) {
          // console.log("msg", msg);
          return (
            <MessageItemWrapper key={msg.id} msg={msg}>
              {null}
            </MessageItemWrapper>
          );
        } else if (
          msg.metaData.urlType === "twitter" &&
          msg.metaData.twitterId
        ) {
          return (
            <MessageItemWrapper key={msg.id} msg={msg}>
              <Box
                sx={{
                  "& iframe": {
                    borderRadius: "13px",
                  },
                }}
              >
                <TwitterTweetEmbed
                  placeholder={<Skeleton width="60%" height="400px" />}
                  options={{
                    theme: "dark",
                  }}
                  tweetId={msg.metaData.twitterId}
                />
              </Box>
            </MessageItemWrapper>
          );
        } else if (msg.metaData.urlType === "video") {
          return (
            <MessageItemWrapper key={msg.id} msg={msg}>
              <Box
                css={css`
                  position: relative;
                  padding-bottom: calc(56.25% * 0.75); /* 16:9 */
                  width: 75%;
                  height: 0;
                  & iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                `}
              >
                <iframe
                  src={msg.metaData.videoUrl}
                  // frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  // css={css``}
                  title="video"
                />
              </Box>
            </MessageItemWrapper>
          );
        } else {
          return (
            <MessageItemWrapper key={msg.id} msg={msg}>
              <MetaCard
                siteName={msg.metaData.site}
                title={msg.metaData.title}
                description={msg.metaData.description}
                imageUrl={msg.metaData.imageUrl}
              />
            </MessageItemWrapper>
          );
        }
      })}
    </Flex>
  );
};
