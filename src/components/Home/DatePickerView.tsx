import { isSameDay } from "date-fns";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";

import {
  useSelectDisabledDays,
  useSelectNavMonth,
} from "@/components/Home/query/queries";

import { dateAtom, dateStrAtom, dayAtom } from "./state";

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
  );
};
