import { useQuery } from "@tanstack/react-query";
import { formatISO, isSameDay } from "date-fns";
import uniq from "lodash.uniq";
import { useCallback } from "react";

import type { ReturnMessages } from "../types";
import { fetchMonthMessage } from "@/components/Home/query";

export const useMonthMsgQuery = <T>({
  dateStr,
  select,
}: // select,
{
  dateStr: string;
  select?: (data: Awaited<ReturnType<typeof fetchMonthMessage>>) => T;
}) => {
  return useQuery({
    queryKey: ["message", dateStr],
    queryFn: () => fetchMonthMessage({ dateStr }),
    select: select ?? undefined,
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });
  // console.log("data", data);
  // return data;
};

const selectDisableDays = (
  data: Awaited<ReturnType<typeof fetchMonthMessage>>
) => {
  return uniq(
    data.messagesOfMonth.map((v) =>
      formatISO(new Date(v.verifiedAt), { representation: "date" })
    )
  );
};
const selectNavMonth = (
  data: Awaited<ReturnType<typeof fetchMonthMessage>>
) => {
  return {
    current: new Date(data.navInfo.currentDate),
    from: new Date(data.navInfo.minDate),
    to: new Date(data.navInfo.maxDate),
  };
};

const selectDayMessages = (
  data: Awaited<ReturnType<typeof fetchMonthMessage>>,
  day: Date | undefined
) => {
  if (!day) return [];
  return data.messagesOfMonth.filter((mes) =>
    isSameDay(new Date(mes.verifiedAt), day)
  );
};

export const useSelectDisabledDays = ({ dateStr }: { dateStr: string }) => {
  return useMonthMsgQuery({ dateStr, select: selectDisableDays });
};
export const useSelectNavMonth = ({ dateStr }: { dateStr: string }) => {
  return useMonthMsgQuery({ dateStr, select: selectNavMonth });
};

export const useSelectDayMessages = ({
  dateStr,
  day,
}: {
  dateStr: string;
  day: Date | undefined;
}) => {
  return useMonthMsgQuery({
    dateStr,
    select: useCallback<
      (data: Awaited<ReturnType<typeof fetchMonthMessage>>) => ReturnMessages
    >((data) => selectDayMessages(data, day), [day]),
  });
};

// const;
