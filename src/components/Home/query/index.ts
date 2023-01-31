import type { MessageType } from "../types";
import { NEXT_PUBLIC_API_URL } from "@/constants";

export const fetchMonthMessage = async ({
  dateStr,
}: {
  dateStr: string;
}): Promise<{
  navInfo: {
    maxDate: Date;
    minDate: Date;
    currentDate: Date;
    nextMonthDate: Date;
    previousMonthDate: Date;
  };
  messagesOfMonth: MessageType[];
}> => {
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/message/?date=${dateStr}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// export const fetchRss = async (): Promise<string> => {
//   const response = await fetch(`${NEXT_PUBLIC_API_URL}/rss`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.text();
// };
