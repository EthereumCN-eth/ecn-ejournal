import { format } from "date-fns";
import { atom } from "jotai";

export const dateAtom = atom(new Date());
export const dateStrAtom = atom((get) => format(get(dateAtom), "yyyy-MM"));
export const dayAtom = atom<Date | undefined>(undefined);
