import MatchesView from "@/components/match/MatchesView";
import { useGetMatches } from "@/hooks/match/useGetMatches";
import UserLayout from "@/layouts/UserLayout.component";
import { getTokenFromServerCookies } from "@/services/login/loginService";
import { Grid, GridItem, Box, useColorMode } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextApiRequest } from "next";
import Head from "next/head";

export default function Home() {
  const { colorMode } = useColorMode();
  const { matches, isLoading } = useGetMatches();
  const bgGridItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";

  return (
    <>
      <Head>
        <title>Goat TeamStats</title>
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
            <Box
              bgImage="/images/bannerHome.webp"
              borderRadius="10px"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              w={{ base: "100%", md: "95%", xl: "100%" }}
              h={"50vh"}
              m="0 auto 30px"
            />

            <MatchesView
              matches={matches}
              isLoading={isLoading}
              title="Últimos partidos"
            />

            {/*  */}
          </Box>
        </UserLayout>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getTokenFromServerCookies(context.req as NextApiRequest);

  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
