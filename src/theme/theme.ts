import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

//fonts
const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

//theme
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,

  fonts: {
    heading: montserrat.style.fontFamily,
    body: montserrat.style.fontFamily,
  },

  colors: {
    palette: {
      fondo: "#F3F8FF",
      gray: { 100: "#666C78" },
      white: { 100: "#FCF7F2" },
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "#FCF7F2" : "#1A202C",
        bg: props.colorMode === "dark" ? "#1A202C" : "#F3F8FF",
      },
    }),
  },
});
// #F3F8FF
