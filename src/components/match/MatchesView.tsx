import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomModal from "../common/modal/CustomModal";
import MoreDetailsMatch from "./MoreDetailsMatch";
import { IMatchResponse } from "@/models/response/IMatchResponse";

export interface IMatchesView {
  isLoading: boolean;
  title: string;
  matches: Array<IMatchResponse>;
}

export default function MatchesView({
  matches,
  isLoading,
  title,
}: IMatchesView) {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMatch, setSelectedMatch] = useState<number>(0);
  const bgGridItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";

  // Getting the selected match
  const selectdMatchData = () => {
    return matches.find((macth) => macth.id_match === selectedMatch);
  };

  return (
    <Box w="100%">
      <Heading as="h3" m="15px 0 15px 10px" fontSize="20px">
        {title}
      </Heading>

      {matches.map((match) => {
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

              {/* More details */}
              <Button
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
              </Button>
            </Flex>
          </Skeleton>
        );
      })}

      {/* More details modal*/}
      <CustomModal
        isHeader={true}
        tittle="Resumen del partido"
        isOpen={isOpen}
        onClose={onClose}
        size={"md"}
      >
        <MoreDetailsMatch matches={selectdMatchData()} />
      </CustomModal>
    </Box>
  );
}
