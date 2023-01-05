import { useQuery } from "@tanstack/react-query";
import { formatISO } from "date-fns";
import uniq from "lodash.uniq";

import { fetchMonthMessage } from "@/query";

export const useMonthMsgQuery = <T>({
  dateStr,
  select,
}: // select,
{
  dateStr: string;
  select?: (data: Awaited<ReturnType<typeof fetchMonthMessage>>) => T;
}) => {
  const { data } = useQuery({
    queryKey: ["message", dateStr],
    queryFn: () => fetchMonthMessage({ dateStr }),
    select: select ?? undefined,
  });
  // console.log("data", data);
  return data;
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
const selectCurrentMonth = (
  data: Awaited<ReturnType<typeof fetchMonthMessage>>
) => {
  return new Date(data.navInfo.currentDate);
};

export const useSelectDisabledDays = ({ dateStr }: { dateStr: string }) => {
  return useMonthMsgQuery({ dateStr, select: selectDisableDays });
};
export const useSelectMonth = ({ dateStr }: { dateStr: string }) => {
  return useMonthMsgQuery({ dateStr, select: selectCurrentMonth });
};

// const;
