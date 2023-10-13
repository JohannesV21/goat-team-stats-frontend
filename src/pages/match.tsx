import MatchesView from "@/components/match/MatchesView";
import { useGetMatches } from "@/hooks/match/useGetMatches";
import UserLayout from "@/layouts/UserLayout.component";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function MatchPage() {
  const { matches, isLoading } = useGetMatches();
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

      <UserLayout>
        <Box m="30px auto" w="95%">
          <MatchesView matches={matches} isLoading={isLoading} />
        </Box>
      </UserLayout>
    </>
  );
}
