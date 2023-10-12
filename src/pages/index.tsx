import UserLayout from "@/layouts/UserLayout.component";
import { Grid, GridItem, Box, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const { colorMode } = useColorMode();
  const bgGridItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Goat TeamStats: La herramienta esencial para administrar tu equipo de fútbol. Gestiona torneos, jugadores y partidos. Obtén estadísticas detalladas y disfruta de un diseño intuitivo y eficiente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserLayout>
          <Box
            w={{ xl: "95%" }}
            m={{ base: "20px auto 0 ", md: "20px auto 0" }}
          >
            <Grid
              templateColumns={{ base: "1fr", xl: "repeat(9, 1fr)" }}
              templateRows={{
                base: "70vh repeat(3, minmax(350px, 1fr))",
                xl: "repeat(2, 1fr)",
              }}
              gap="20px"
              h={{ base: "100%", xl: "86vh" }}
            >
              <GridItem
                gridRow={{ xl: "1 / 3" }}
                gridColumn={{ xl: "1 / 3" }}
                borderRadius="6px"
                bgColor={bgGridItems}
                w={{ base: "95%", xl: "100%" }}
                m="0 auto"
                h={"100%"}
              >
                <Box w={"100%"} h={"100%"}>
                  red
                </Box>
              </GridItem>
              <GridItem
                borderRadius={{ base: "0 0 10px 10px", md: "6px" }}
                gridRow={{ base: "1 / 2" }}
                gridColumn={{ xl: "3 / 8" }}
                bgImage="/images/bannerGoat.webp"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w={{ base: "100%", md: "95%", xl: "100%" }}
                h={"100%"}
                m="0 auto"
              >
                <Box w={"100%"} h={"100%"}>
                  red
                </Box>
              </GridItem>
              <GridItem
                borderRadius="6px"
                gridRow={{ xl: "2 / 3" }}
                gridColumn={{ xl: "3 / 8" }}
                bgColor={bgGridItems}
                w={{ base: "95%", xl: "100%" }}
                m="0 auto"
                h={"100%"}
              >
                <Box w={"100%"} h={"100%"}>
                  red
                </Box>
              </GridItem>

              <GridItem
                borderRadius="6px"
                gridRow={{ xl: "1 / 3" }}
                gridColumn={{ xl: "8 / 10" }}
                bgColor={bgGridItems}
                w={{ base: "95%", xl: "100%" }}
                h={"100%"}
                m="0 auto"
              >
                <Box w={"100%"} h={"100%"}>
                  red
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </UserLayout>
      </main>
    </>
  );
}
