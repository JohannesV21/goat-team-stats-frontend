import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useGetTournaments } from "@/hooks/tournament/useGetTournaments";
import CustomModal from "../common/modal/CustomModal";
import CreateAndUpdateForm from "../forms/tournament/CreateAndUpdateForm.component";

interface ISelectTournament {
  id_tournament: number;
  name: string;
}

export default function TournamentCard() {
  const { isLoading, tournaments } = useGetTournaments();
  const [selectedTournament, setSelectedTournament] =
    useState<ISelectTournament>({
      id_tournament: 0,
      name: "",
    });
  const {
    isOpen: isOpenUpdateTournament,
    onOpen: onOpenUpdateTournament,
    onClose: onCloseUpdateTournament,
  } = useDisclosure();

  // Getting the selected match
  const selectdTournamenthData = () => {
    return tournaments.find(
      (tournament) =>
        tournament.id_tournament === selectedTournament.id_tournament
    );
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fit, minmax(300px, 1fr))",
        md: "repeat(2, minmax(350px, 1fr))",
        xl: "repeat(3, minmax(350px, 1fr))",
      }}
      gap="10px"
      placeItems="center"
    >
      {tournaments.map(({ id_tournament, init_date, end_date, name }) => {
        return (
          <GridItem w="90%" key={id_tournament}>
            <Box w="100%" mt="50px">
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
                <Box
                  bgColor="white"
                  borderRadius="8px"
                  mt="5px"
                  p="15px 20px"
                  boxShadow="xl"
                >
                  <Box>
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

                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      m="10px 0 10px"
                    >
                      <Text>Fecha inicio:</Text>
                      <Text>{init_date}</Text>
                    </Flex>

                    <Divider />

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
                    <Box>
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
                    {/* <Box>
                      <HiPencilAlt size={"18px"} color="blue" />
                    </Box> */}
                    <Box>
                      <FaTrash color="red" />
                    </Box>
                  </Flex>
                </Box>
              </Skeleton>
            </Box>
          </GridItem>
        );
      })}

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
    </Grid>
  );
}
