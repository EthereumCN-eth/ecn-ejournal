import { Image, Text, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const MetaCard = ({
  siteName,
  description,
  imageUrl,
  title,
}: {
  siteName?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}) => {
  return (
    <VStack
      align="flex-start"
      bgColor="#282828"
      borderRadius="8px"
      borderLeft="3px solid #E1722F"
      rowGap="1.5625rem"
      padding="16px 16px 16px 23px"
      // bgColor="green.100"
      w="50%"
      h="fit-content"
      // maxWidth="443px"
      minWidth="350px"
    >
      {/*  */}
      {siteName && (
        <Text
          // mb="25px"
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.25rem;

            /* identical to box height */

            color: #aaaaaa;
          `}
        >
          {siteName}
        </Text>
      )}
      {title && (
        <Text
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 600;
            font-size: 1.3rem;
            line-height: 1.8125rem;

            color: #ffffff;
          `}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          css={css`
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.375rem;

            color: #ffffff;
          `}
        >
          {description}
        </Text>
      )}
      {imageUrl && (
        <Image
          alt={`meta-image-${imageUrl}`}
          width="100%"
          height="auto"
          src={imageUrl}
          borderRadius="8px"
          bgColor="#D9D9D9"
        />
      )}
    </VStack>
  );
};
