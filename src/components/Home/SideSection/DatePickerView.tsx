import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { isSameDay } from "date-fns";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";

import { dateAtom, dateStrAtom, dayAtom } from "../state";
import {
  useSelectDisabledDays,
  useSelectNavMonth,
} from "@/components/Home/query/queries";

export const DatePickerView = () => {
  const [selected, setSelected] = useAtom(dayAtom);
  const [month, setMonth] = useAtom(dateAtom);
  const [dateStr] = useAtom(dateStrAtom);
  const dates = useSelectDisabledDays({
    dateStr,
  });
  const nav = useSelectNavMonth({ dateStr });
  const mounted = useRef(false);
  useEffect(() => {
    if (nav && !isSameDay(month, nav.current) && !mounted.current) {
      setMonth(nav.current);
      setSelected(nav.current);
      mounted.current = true;
    }
  }, [month, nav, setMonth, setSelected]);
  // console.log(dates);
  return (
    <Box
      css={css`
        background: #3d3d3d;
        border-radius: 16px;
        padding: 5px;
        color: white;
      `}
    >
      <DayPicker
        onMonthChange={setMonth}
        month={month}
        fromMonth={nav?.from}
        toMonth={nav?.to}
        mode="single"
        disabled={(day) => !dates?.some((v) => isSameDay(new Date(v), day))}
        selected={selected}
        onSelect={setSelected}
      />
    </Box>
  );
};
