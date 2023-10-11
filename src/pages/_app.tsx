import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { useToastify } from "@/hooks/useToastify";

export default function App({ Component, pageProps }: AppProps) {
  useToastify();
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
