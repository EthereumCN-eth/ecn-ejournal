import type { ComponentStyleConfig } from "@chakra-ui/react";
import { lighten } from "polished";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "full",
  },
  variants: {
    join: {
      bgColor: "#3D3D3D",
      borderRadius: "8px",

      _hover: {
        bgColor: lighten(0.1, "#3D3D3D"),
        _disabled: {
          bgColor: "gray.300",
        },
      },
      _active: {
        bgColor: lighten(0.2, "#3D3D3D"),
      },
    },
    rss: {
      bgColor: "#3D3D3D",
      borderRadius: "8px",

      _hover: {
        bgColor: lighten(0.1, "#3D3D3D"),
        _disabled: {
          bgColor: "gray.300",
        },
      },
      _active: {
        bgColor: lighten(0.2, "#3D3D3D"),
      },
    },
  },
};
