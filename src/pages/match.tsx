import CustomModal from "@/components/common/modal/CustomModal";
import MatchesView from "@/components/match/MatchesView";
import { useGetMatches } from "@/hooks/match/useGetMatches";
import UserLayout from "@/layouts/UserLayout.component";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import CreateAndUpdateMatch from "../components/forms/match/CreateAndUpdateMatch.component";
import { getTokenFromServerCookies } from "@/services/login/loginService";
import { GetServerSidePropsContext, NextApiRequest } from "next";

export default function MatchPage() {
  const {
    isOpen: isOpenAddMatches,
    onOpen: onOpenAddMatches,
    onClose: onCloseAddMatches,
  } = useDisclosure();
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
        <Box m="30px auto" w="95%" overflow="hidden">
          <Flex alignItems="center" gap="20px" m="30px 0 30px 30px" w={"95%"}>
            <Heading fontSize="24px">Partidos jugados</Heading>

            {/* Add tournament button */}
            <Flex
              cursor="pointer"
              title="Agregar torneo"
              bottom="50px"
              right="50px"
              justifyContent="center"
              alignItems="center"
              bgColor="palette.green"
              width="30px"
              h="30px"
              borderRadius="100%"
              onClick={onOpenAddMatches}
            >
              <AddIcon color="white" fontSize="12px" />
            </Flex>
          </Flex>

          <MatchesView
            matches={matches}
            isLoading={isLoading}
            title=""
            viewUpdateAndDelete={true}
          />
        </Box>

        {/* Add team modal */}
        <CustomModal
          isHeader={true}
          isOpen={isOpenAddMatches}
          onClose={onCloseAddMatches}
          size={{ base: "sm", md: "xl" }}
          tittle={`Agregar partido`}
        >
          <CreateAndUpdateMatch />
        </CustomModal>
      </UserLayout>
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
