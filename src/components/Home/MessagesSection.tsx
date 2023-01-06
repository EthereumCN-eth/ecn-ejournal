import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { useSelectDayMessages } from "./query/queries";
import { dateStrAtom, dayAtom } from "./state";

export const MessagesSection = () => {
  const [dateStr] = useAtom(dateStrAtom);
  const [day] = useAtom(dayAtom);
  // console.log(day);
  const msgs = useSelectDayMessages({ dateStr, day });

  return (
    <Box>
      <pre
        style={{
          display: "block",
          width: "100%",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify(msgs, null, 4)}
      </pre>
    </Box>
  );
};
