import { IMoreDetailsMatch } from "@/models/components/IMatch";
import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export default function MoreDetailsMatch({ matches }: IMoreDetailsMatch) {
  const matchDetails = [
    { id: 0, text: "Torneo", value: matches?.tournament.name },
    { id: 1, text: "Goles", value: matches?.team_goals },
    { id: 2, text: "Goles del oponente", value: matches?.opponent_goals },
    { id: 3, text: "Disparos realizados", value: matches?.shots_taken },
    { id: 4, text: "Disparos a porteria", value: matches?.shots_on_goal },
    { id: 5, text: "Pases completados", value: matches?.completed_passes },
    { id: 6, text: "Tarjetas amarillas", value: matches?.yellow_cards },
    { id: 7, text: "Tarjetas Rojas", value: matches?.red_cards },
    { id: 8, text: "Faltas cometidas", value: matches?.fouls_comitted },
  ];

  return (
    <Box w="100%">
      <Text
        textAlign="center"
        mb="30px"
      >{`${matches?.team.name} vs ${matches?.opponent_name}`}</Text>

      {matchDetails.map((details) => {
        return (
          <React.Fragment key={details.id}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>{details.text}:</Text>
              <Text>{details.value}</Text>
            </Flex>
            <Divider mb={"10px"} />
          </React.Fragment>
        );
      })}
    </Box>
  );
}
