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
import { useGetTournaments } from "@/hooks/tournament/useGetTournaments";
import CustomModal from "../common/modal/CustomModal";
import CreateAndUpdateForm from "../forms/tournament/CreateAndUpdateForm.component";
import { deleteTournamentHelper } from "@/helper/tournament/deleteTournament";
import { useGetMatchesbyTournament } from "@/hooks/match/useGetMatchesByTournament";
import MatchesView from "../match/MatchesView";

interface ISelectTournament {
  id_tournament: number;
  name: string;
}

export default function TournamentCard() {
  const cancelRef = useRef<any>();
  const [selectedTournament, setSelectedTournament] =
    useState<ISelectTournament>({
      id_tournament: 0,
      name: "",
    });

  // get all matches by tournament
  const { isLoading: isLoadingByTournament, matchesByTournament } =
    useGetMatchesbyTournament(selectedTournament.id_tournament);

  // get all tournaments
  const { isLoading, tournaments } = useGetTournaments();
  const [tournamentData, setTournamentData] = useState(tournaments);

  // Update tournament Modal
  const {
    isOpen: isOpenUpdateTournament,
    onOpen: onOpenUpdateTournament,
    onClose: onCloseUpdateTournament,
  } = useDisclosure();

  // Delete tournament Modal
  const {
    isOpen: isOpenDeleteTournament,
    onOpen: onOpenDeleteTournament,
    onClose: onCloseDeleteTournament,
  } = useDisclosure();

  // View details
  const {
    isOpen: isOpenDetailsTournament,
    onOpen: onOpenDetailsTournament,
    onClose: onCloseDetailsTournament,
  } = useDisclosure();

  // Update tournaments list
  useEffect(() => {
    setTournamentData(tournaments);
  }, [tournaments]);

  // Getting the selected match
  const selectdTournamenthData = () => {
    return tournaments.find(
      (tournament) =>
        tournament.id_tournament === selectedTournament.id_tournament
    );
  };

  const { colorMode } = useColorMode();
  const bgItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";

  return (
    <>
      {tournamentData.length !== 0 ? (
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
            {tournamentData.map(
              ({ id_tournament, init_date, end_date, name }) => {
                return (
                  <GridItem w="95%" key={id_tournament}>
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

                            {/* Init date */}
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                              m="10px 0 10px"
                            >
                              <Text>Fecha inicio:</Text>
                              <Text>{init_date}</Text>
                            </Flex>

                            <Divider />

                            {/* Init date */}
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                              m="10px 0 10px"
                            >
                              <Text>Fecha fin:</Text>
                              <Text>{end_date}</Text>
                            </Flex>

                            <Divider m="15px 0 30px" />
                          </Box>

                          <Flex justifyContent="flex-end" mb="10px" gap={6}>
                            {/* Details button */}
                            <Box
                              cursor="pointer"
                              _hover={{ transform: "scale(1.1)" }}
                              _active={{ transform: "scale(0.99)" }}
                              onClick={() => {
                                onOpenDetailsTournament();
                                setSelectedTournament({
                                  id_tournament,
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
                                onOpenUpdateTournament();
                                setSelectedTournament({
                                  id_tournament,
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
                                onOpenDeleteTournament();
                                setSelectedTournament({
                                  id_tournament,
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
              }
            )}
          </>
        </Grid>
      ) : (
        <Text textAlign="center" mt="100px" fontSize="20px">
          No hay torneos registrados
        </Text>
      )}

      {/* Update tournament modal */}
      <CustomModal
        isHeader={true}
        isOpen={isOpenUpdateTournament}
        onClose={onCloseUpdateTournament}
        size={{ base: "sm", md: "md" }}
        tittle={`Editar ${selectedTournament.name}`}
      >
        <CreateAndUpdateForm
          id_tournament={selectedTournament.id_tournament}
          tournamentToUpdate={selectdTournamenthData()}
        />
      </CustomModal>

      {/* Details tournament modal */}
      <CustomModal
        isHeader={true}
        isOpen={isOpenDetailsTournament}
        onClose={onCloseDetailsTournament}
        size={{ base: "sm", md: "3xl" }}
        tittle={`Detalles del torneo`}
      >
        <MatchesView
          matches={matchesByTournament}
          isLoading={isLoadingByTournament}
        />
      </CustomModal>

      {/* Delete to tournament dialog */}
      <AlertDialog
        isOpen={isOpenDeleteTournament}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDeleteTournament}
        isCentered
      >
        <AlertDialogOverlay bgColor="#00000015">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {selectedTournament.name}
            </AlertDialogHeader>

            <AlertDialogBody>
              {`¿Está seguro que quiere eliminar el torneo ${selectedTournament.name}?`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onCloseDeleteTournament}>Cancelar</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onCloseDeleteTournament();
                  deleteTournamentHelper(selectedTournament.id_tournament);
                  setTournamentData(
                    tournamentData.filter(
                      ({ id_tournament }) =>
                        id_tournament !== selectedTournament.id_tournament
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
