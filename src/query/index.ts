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
  messagesOfMonth: ({
    id: string;
    expressUrl: string;
    expressMessage: string;
    verifiedAt: Date;
    userId: string;
    contentType: string;
  } & {
    user: {
      name: string;
    };
  })[];
}> => {
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/message/?date=${dateStr}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
