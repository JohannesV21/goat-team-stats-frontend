import CustomModal from "@/components/common/modal/CustomModal";
import CreateAndUpdateTeam from "@/components/forms/team/CreateAndUpdateTeam.component";
import TeamCard from "@/components/team/TeamCard";
import UserLayout from "@/layouts/UserLayout.component";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import { getTokenFromServerCookies } from "@/services/login/loginService";
import { GetServerSidePropsContext, NextApiRequest } from "next";

export default function TeamPage() {
  const {
    isOpen: isOpenAddTeam,
    onOpen: onOpenAddTeam,
    onClose: onCloseAddTeam,
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
            <Heading fontSize="24px">Equipos</Heading>

            {/* Add Team button */}
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
              onClick={onOpenAddTeam}
            >
              <AddIcon color="white" fontSize="12px" />
            </Flex>
          </Flex>

          {/* Add Team modal */}
          <CustomModal
            isHeader={true}
            isOpen={isOpenAddTeam}
            onClose={onCloseAddTeam}
            size={{ base: "sm", md: "md" }}
            tittle={`Agregar torneo`}
          >
            <CreateAndUpdateTeam />
          </CustomModal>

          <TeamCard />
        </Box>
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
