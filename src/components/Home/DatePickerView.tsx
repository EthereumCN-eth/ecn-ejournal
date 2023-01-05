import { format, isSameDay } from "date-fns";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";

import { useSelectDisabledDays, useSelectMonth } from "@/query/queries";

const dateAtom = atom(new Date());
const dateStrAtom = atom((get) => format(get(dateAtom), "yyyy-MM"));

export const DatePickerView = () => {
  const [selected, setSelected] = useState<Date>();
  const [month, setMonth] = useAtom(dateAtom);
  const [dateStr] = useAtom(dateStrAtom);
  const dates = useSelectDisabledDays({
    dateStr,
  });
  const calcmonth = useSelectMonth({ dateStr });
  useEffect(() => {
    if (calcmonth && !isSameDay(month, calcmonth)) {
      setMonth(calcmonth);
    }
  }, [calcmonth, month, setMonth]);
  // console.log(dates);
  return (
    <DayPicker
      onMonthChange={setMonth}
      month={month}
      mode="single"
      disabled={(day) => !dates?.some((v) => isSameDay(new Date(v), day))}
      selected={selected}
      onSelect={setSelected}
    />
  );
};
