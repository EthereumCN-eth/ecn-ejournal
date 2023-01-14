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
};
export type ReturnMessages = MessageType[];
