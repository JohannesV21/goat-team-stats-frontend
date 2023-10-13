// import "@/styles/globals.css";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";
// import { theme } from "../theme/theme";
// import { useToastify } from "@/hooks/useToastify";

// export default function App({ Component, pageProps }: AppProps) {
//   useToastify();
//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// import "@/styles/globals.css";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";
// import { theme } from "../theme/theme";
// import { useToastify } from "@/hooks/useToastify";

// export default function App({ Component, pageProps }: AppProps) {
//   useToastify();

//   const router = useRouter();

//   useEffect(() => {
//     // Verifica si no hay token y la ruta actual no es "/auth".
//     if (!Cookies.get("token") && router.pathname !== "/auth") {
//       router.push("/auth");
//     }
//   }, [router]);

//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ChakraProvider, Spinner, Flex } from "@chakra-ui/react"; // Importa Spinner y Flex
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { useToastify } from "@/hooks/useToastify";
import {
  getTokenFromServerCookies,
  loadStorage,
} from "@/services/login/loginService";

export default function App({ Component, pageProps }: AppProps) {
  useToastify();
  const router = useRouter();

  useEffect(() => {
    // Verificar si el token existe en el cliente
    const token = loadStorage().token;

    if (!token && router.pathname !== "/auth") {
      router.push("/auth");
    }
  }, [router.pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   useToastify();

//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (!Cookies.get("token") && router.pathname !== "/auth") {
//       router.push("/auth");
//     }
//     setLoading(false);
//   }, [router]);

//   if (loading) {
//     // Si está cargando, muestra el Spinner en el centro de la pantalla
//     return (
//       <Flex justify="center" align="center" height="100vh">
//         <Spinner size="xl" />
//       </Flex>
//     );
//   }

//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }
