import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "../common/modal/CustomModal";
import MoreDetailsMatch from "./MoreDetailsMatch";
import { IMatchResponse } from "@/models/response/IMatchResponse";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import CreateAndUpdateMatch from "../forms/match/CreateAndUpdateMatch.component";
import { deleteMatchHelper } from "@/helper/forms/match/deleteMatchHelper";

export interface IMatchesView {
  isLoading: boolean;
  title: string;
  matches: Array<IMatchResponse>;
  viewUpdateAndDelete?: boolean;
}

interface ISelectMatch {
  id_match: number;
  name: string;
}

export default function MatchesView({
  matches,
  isLoading,
  title,
  viewUpdateAndDelete = false,
}: IMatchesView) {
  const cancelRef = useRef<any>();
  const { colorMode } = useColorMode();
  const [selectedMatch, setSelectedMatch] = useState<ISelectMatch>({
    id_match: 0,
    name: "",
  });
  const bgGridItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";

  const [matchData, setMatchData] = useState(matches);

  // Update match Modal
  const {
    isOpen: isOpenUpdateMatch,
    onOpen: onOpenUpdateMatch,
    onClose: onCloseUpdateMatch,
  } = useDisclosure();

  // Delete match Modal
  const {
    isOpen: isOpenDeleteMatch,
    onOpen: onOpenDeleteMatch,
    onClose: onCloseDeleteMatch,
  } = useDisclosure();

  // View details Modal
  const {
    isOpen: isOpenDetailsMatch,
    onOpen: onOpenDetailsMatch,
    onClose: onCloseDetailsMatch,
  } = useDisclosure();

  // Getting the selected match
  const selectdMatchData = () => {
    return matches.find((macth) => macth.id_match === selectedMatch.id_match);
  };

  // Update Match list
  useEffect(() => {
    setMatchData(matches);
  }, [matches]);

  return (
    <Box w="100%">
      <Heading as="h3" m="15px 0 15px 10px" fontSize="20px">
        {title}
      </Heading>
      {matchData.length !== 0 ? (
        <>
          {matchData.map((match) => {
            return (
              <Skeleton
                key={match.id_match}
                isLoaded={!isLoading}
                borderRadius={"6px"}
              >
                <Flex
                  alignItems="center"
                  justifyContent={"space-between"}
                  w="100%"
                  borderRadius="6px"
                  bgColor={bgGridItems}
                  p={{ base: "15px 20px" }}
                  mb="15px"
                  gap="20px"
                  fontSize="14px"
                  direction={{ base: "column", sm: "row" }}
                >
                  {/* Date */}
                  <Text>{match.date}</Text>

                  {/* Teams that played */}
                  <Flex
                    gap="10px"
                    alignItems="center"
                    direction={{ base: "column", lg: "row" }}
                  >
                    <Text>{match.team.name}</Text>
                    <Text
                      fontSize="10px"
                      fontWeight={700}
                      verticalAlign="text-bottom"
                    >
                      VS
                    </Text>
                    <Text>{match.opponent_name}</Text>
                  </Flex>

                  {/*Tournament */}
                  <Text>{match.tournament.name}</Text>

                  {viewUpdateAndDelete ? (
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap="15px"
                    >
                      {/* More details */}
                      {/* <Button
                      fontSize="14px"
                      px="5px"
                      bgColor="unset"
                      onClick={() => {
                        onOpen();
                        setSelectedMatch(match.id_match);
                      }}
                      rightIcon={<ArrowForwardIcon color={"palette.green"} />}
                    >
                      Ver detalles
                    </Button> */}

                      {/* Details button */}
                      <Box
                        title="Detalles"
                        cursor="pointer"
                        _hover={{ transform: "scale(1.1)" }}
                        _active={{ transform: "scale(0.99)" }}
                        onClick={() => {
                          onOpenDetailsMatch();
                          setSelectedMatch({
                            id_match: match.id_match,
                            name: `${match.team.name} vs ${match.opponent_name}`,
                          });
                        }}
                      >
                        <AiFillEye size={"20px"} color="#2DCC70" />
                      </Box>

                      {/* Edit button */}
                      <Box
                        title="Editar"
                        cursor="pointer"
                        _hover={{ transform: "scale(1.1)" }}
                        _active={{ transform: "scale(0.99)" }}
                        onClick={() => {
                          onOpenUpdateMatch();
                          setSelectedMatch({
                            id_match: match.id_match,
                            name: `${match.team.name} vs ${match.opponent_name}`,
                          });
                        }}
                      >
                        <HiPencilAlt size={"20px"} color="#4299E1" />
                      </Box>

                      {/* Delete button */}
                      <Box
                        title="Borrar"
                        cursor="pointer"
                        _hover={{ transform: "scale(1.1)" }}
                        _active={{ transform: "scale(0.99)" }}
                        onClick={() => {
                          onOpenDeleteMatch();
                          setSelectedMatch({
                            id_match: match.id_match,
                            name: `${match.team.name} vs ${match.opponent_name}`,
                          });
                        }}
                      >
                        <FaTrash color="red" />
                      </Box>
                    </Flex>
                  ) : (
                    <>
                      <Button
                        fontSize="14px"
                        px="5px"
                        bgColor="unset"
                        onClick={() => {
                          onOpenDetailsMatch();
                          setSelectedMatch({
                            id_match: match.id_match,
                            name: `${match.team.name} vs ${match.opponent_name}`,
                          });
                        }}
                        rightIcon={<ArrowForwardIcon color={"palette.green"} />}
                      >
                        Ver detalles
                      </Button>
                    </>
                  )}
                </Flex>
              </Skeleton>
            );
          })}
        </>
      ) : (
        <Text textAlign="center" mt="50px" fontSize="20px">
          Este equipo no tiene registrados
        </Text>
      )}

      {/* More details modal*/}
      <CustomModal
        isHeader={true}
        tittle="Resumen del partido"
        isOpen={isOpenDetailsMatch}
        onClose={onCloseDetailsMatch}
        size={"md"}
      >
        <MoreDetailsMatch matches={selectdMatchData()} />
      </CustomModal>

      {/* Update match modal */}
      <CustomModal
        isHeader={true}
        isOpen={isOpenUpdateMatch}
        onClose={onCloseUpdateMatch}
        size={{ base: "sm", md: "md" }}
        tittle={`Editar `}
      >
        <CreateAndUpdateMatch
          id_match={selectedMatch.id_match}
          matchToUpdate={selectdMatchData()}
        />
      </CustomModal>

      {/* Delete to team dialog */}
      <AlertDialog
        isOpen={isOpenDeleteMatch}
        leastDestructiveRef={cancelRef}
        onClose={onCloseDeleteMatch}
        isCentered
      >
        <AlertDialogOverlay bgColor="#00000015">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar {selectedMatch.name}
            </AlertDialogHeader>

            <AlertDialogBody>
              {`¿Está seguro que quiere eliminar el partido ${selectedMatch.name}?`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onCloseDeleteMatch}>Cancelar</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onCloseDeleteMatch();
                  deleteMatchHelper(selectedMatch.id_match);
                  setMatchData(
                    matchData.filter(
                      ({ id_match }) => id_match !== selectedMatch.id_match
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
    </Box>
  );
}
