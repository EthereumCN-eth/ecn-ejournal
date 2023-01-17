import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { isSameDay, isSameMonth } from "date-fns";
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
  const { data: dates } = useSelectDisabledDays({
    dateStr,
  });
  const { data: nav, isSuccess } = useSelectNavMonth({ dateStr });

  const initMounted = useRef(false);
  useEffect(() => {
    if (!initMounted.current && nav) {
      setMonth(nav.current);
      setSelected(nav.current);
      initMounted.current = true;
    }
    // eslint-disable-next-line sonarjs/no-collapsible-if
    if (nav && isSuccess) {
      // eslint-disable-next-line sonarjs/no-collapsible-if
      if (isSameMonth(month, nav.current)) {
        setMonth(nav.current);
        setSelected(nav.current);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, nav?.current, setMonth, setSelected, month]);
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
