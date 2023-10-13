import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Button,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Divider,
  Skeleton,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useColorMode,
} from "@chakra-ui/react";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import CustomModal from "../common/modal/CustomModal";
import { useGetTeams } from "@/hooks/team/useGetTeams";
import CreateAndUpdateTeam from "../forms/team/CreateAndUpdateTeam.component";
import { deleteTeamHelper } from "@/helper/forms/team/deleteTeamHelper";

interface ISelectTeam {
  id_team: number;
  name: string;
}

export default function TeamCard() {
  const cancelRef = useRef<any>();
  const [selectedTeam, setSelectedTeam] = useState<ISelectTeam>({
    id_team: 0,
    name: "",
  });

  // get all teams
  const { isLoading, teams } = useGetTeams();
  const [teamsData, setTeamsData] = useState(teams);

  // Update team Modal
  const {
    isOpen: isOpenUpdateTeam,
    onOpen: onOpenUpdateTeam,
    onClose: onCloseUpdateTeam,
  } = useDisclosure();

  // Delete team Modal
  const {
    isOpen: isOpenDeleteTeam,
    onOpen: onOpenDeleteTeam,
    onClose: onCloseDeleteTeam,
  } = useDisclosure();

  // View details
  const {
    isOpen: isOpenDetailsTeam,
    onOpen: onOpenDetailsTeam,
    onClose: onCloseDetailsTeam,
  } = useDisclosure();

  // Update team  list
  useEffect(() => {
    setTeamsData(teams);
  }, [teams]);

  // Getting the selected team
  const selectdTeamData = () => {
    return teams.find((team) => team.id_team === selectedTeam.id_team);
  };

  // background info cards
  const { colorMode } = useColorMode();
  const bgItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";

  return (
    <>
      {/* conditional validation to show cards */}
      {teamsData.length !== 0 ? (
        <Grid
          templateColumns={{
            base: "repeat(auto-fit, minmax(300px, 1fr))",
            md: "repeat(2, minmax(350px, 1fr))",
            xl: "repeat(3, minmax(350px, 1fr))",
          }}
          gap="10px"
          placeItems="center"
          overflow="hidden"
        >
          <>
            {teamsData.map(({ id_team, name, rif }) => {
              return (
                <GridItem w="95%" key={id_team}>
                  <Box w="100%" mt="30px">
                    {/* Image */}
                    <Box
                      h="150px"
                      p="50px"
                      borderRadius="8px"
                      bgColor="palette.green"
                      bgImage={"/images/bannerGoat.webp"}
                      bgSize="cover"
                      bgPosition={"center"}
                    />

                    <Skeleton isLoaded={!isLoading} borderRadius="8px">
                      {/* Info section */}
                      <Box
                        bgColor={bgItems}
                        borderRadius="8px"
                        mt="5px"
                        p="15px 20px"
                        boxShadow="xl"
                      >
                        <Box>
                          {/* name */}
                          <Heading
                            as="h3"
                            color="#666C78"
                            fontSize="xl"
                            textAlign="center"
                            fontWeight="700"
                            m="10px 0 25px"
                            h={{ base: "40px", sm: "50px" }}
                          >
                            {name}
                          </Heading>

                          {/* Rif */}
                          <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            m="10px 0 10px"
                          >
                            <Text>rif:</Text>
                            <Text>{rif}</Text>
                          </Flex>

                          <Divider m="15px 0 30px" />
                        </Box>

                        {/* buttons for modal actions */}
                        <Flex justifyContent="flex-end" mb="10px" gap={6}>
                          {/* Details button */}
                          <Box
                            cursor="pointer"
                            _hover={{ transform: "scale(1.1)" }}
                            _active={{ transform: "scale(0.99)" }}
                            onClick={() => {
                              onOpenDetailsTeam();
                              setSelectedTeam({
                                id_team,
                                name,
                              });
                            }}
                          >
                            <AiFillEye size={"18px"} color="#2DCC70" />
                          </Box>

                          {/* Edit button */}
                          <Box
                            cursor="pointer"
                            _hover={{ transform: "scale(1.1)" }}
                            _active={{ transform: "scale(0.99)" }}
                            onClick={() => {
                              onOpenUpdateTeam();
                              setSelectedTeam({
                                id_team,
                                name,
                              });
                            }}
                          >
                            <HiPencilAlt size={"18px"} color="#4299E1" />
                          </Box>

                          {/* Delete button */}
                          <Box
                            cursor="pointer"
                            _hover={{ transform: "scale(1.1)" }}
                            _active={{ transform: "scale(0.99)" }}
                            onClick={() => {
                              onOpenDeleteTeam();
                              setSelectedTeam({
                                id_team,
                                name,
                              });
                            }}
                          >
                            <FaTrash color="red" />
                          </Box>
                        </Flex>
                      </Box>
                    </Skeleton>
                  </Box>
                </GridItem>
              );
            })}
          </>
        </Grid>
      ) : (
        <Text textAlign="center" mt="100px" fontSize="20px">
          No hay equipos registrados
        </Text>
      )}

      {/* Update team modal */}
      <CustomModal
        isHeader={true}
        isOpen={isOpenUpdateTeam}
        onClose={onCloseUpdateTeam}
        size={{ base: "sm", md: "md" }}
        tittle={`Editar ${setSelectedTeam.name}`}
      >
        <CreateAndUpdateTeam
          id_team={selectedTeam.id_team}
          teamToUpdate={selectdTeamData()}
        />
      </CustomModal>

      {/* Details team modal */}
      <CustomModal
        isHeader={true}
        isOpen={isOpenDetailsTeam}
        onClose={onCloseDetailsTeam}
        size={{ base: "sm", md: "3xl" }}
        tittle={`Detalles del torneo`}
      >
        {/* <MatchesView
          matches={matchesByTournament}
          isLoading={isLoadingByTournament}
        /> */}
        <h1>details</h1>
      </CustomModal>

      {/* Delete to team dialog */}
      <AlertDialog
        isOpen={isOpenDeleteTeam}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDeleteTeam}
        isCentered
      >
        <AlertDialogOverlay bgColor="#00000015">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {selectedTeam.name}
            </AlertDialogHeader>

            <AlertDialogBody>
              {`¿Está seguro que quiere eliminar el equipo ${selectedTeam.name}?`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onCloseDeleteTeam}>Cancelar</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onCloseDeleteTeam();
                  deleteTeamHelper(selectedTeam.id_team);
                  setTeamsData(
                    teamsData.filter(
                      ({ id_team }) => id_team !== selectedTeam.id_team
                    )
                  );
                }}
                ml={3}
              >
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
