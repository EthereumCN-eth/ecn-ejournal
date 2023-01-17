export type MessageType = {
  id: string;
  expressUrl: string;
  expressMessage: string;
  verifiedAt: Date;
  userId: string;
  contentType: string;
} & {
  user: {
    name: string;
    discordAvatar: string;
  };
  metaData: {
    description?: string;
    imageUrl?: string;
    messageId?: string;
    site?: string;
    title?: string;
    twitterId?: string;
    urlType?: "twitter" | "video" | "ogData" | "onlyMeta" | "noMeta";

    videoUrl?: string;
  };
};
export type ReturnMessages = MessageType[];
