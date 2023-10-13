import CustomModal from "@/components/common/modal/CustomModal";
import CreateAndUpdateForm from "@/components/forms/tournament/CreateAndUpdateForm.component";
import TournamentCard from "@/components/tournament/TournamentCard";
import UserLayout from "@/layouts/UserLayout.component";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";

export default function TournamentPage() {
  const {
    isOpen: isOpenAddTournament,
    onOpen: onOpenAddTournament,
    onClose: onCloseAddTournament,
  } = useDisclosure();
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
        <Box w={"95%"} m="0 auto 50px" overflow="hidden">
          <Flex alignItems="center" gap="20px" m="30px 0 0 30px" w={"95%"}>
            <Heading fontSize="24px">Torneos</Heading>

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
              onClick={onOpenAddTournament}
            >
              <AddIcon color="white" fontSize="12px" />
            </Flex>
          </Flex>

          {/* Add tournament modal */}
          <CustomModal
            isHeader={true}
            isOpen={isOpenAddTournament}
            onClose={onCloseAddTournament}
            size={{ base: "sm", md: "md" }}
            tittle={`Agregar torneo`}
          >
            <CreateAndUpdateForm />
          </CustomModal>

          <TournamentCard />
        </Box>
      </UserLayout>
    </>
  );
}
