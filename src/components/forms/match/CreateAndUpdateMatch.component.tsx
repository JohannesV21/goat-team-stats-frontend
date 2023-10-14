import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  ICreateAndUpdateMatch,
  IMatchResponse,
} from "@/models/response/IMatchResponse";
import { onSubmitRegisterMatch } from "@/helper/forms/match/onSubmitCreateMatch";
import { onSubmitUpdateMatch } from "@/helper/forms/match/onSubmitUpdateMatch";
import React from "react";
import { useForm } from "react-hook-form";
import { useGetTeams } from "@/hooks/team/useGetTeams";
import { useGetTournaments } from "@/hooks/tournament/useGetTournaments";

interface ITeamRegisterUpdate {
  id_match?: number;
  matchToUpdate?: IMatchResponse | undefined;
}

export default function CreateAndUpdateMatch({
  id_match,
  matchToUpdate,
}: ITeamRegisterUpdate) {
  const { teams } = useGetTeams();
  const { tournaments } = useGetTournaments();
  // Use form
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<ICreateAndUpdateMatch>();
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" m="0 auto" justifyContent="center" alignItems="center">
      <FormControl
        as={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        onSubmit={handleSubmit((matchData) => {
          id_match
            ? onSubmitUpdateMatch({ id_match, matchUpdate: matchData })
            : onSubmitRegisterMatch(matchData);
        })}
      >
        {/* Init date */}
        <FormLabel w="90%" htmlFor="date" textAlign={"start"} pl="5px">
          Fecha del partido:
        </FormLabel>
        <Input
          id="date"
          defaultValue={matchToUpdate?.date}
          type="date"
          {...register("date", {
            required: { value: true, message: "este campo es requerido" },
          })}
          borderRadius="6px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "palette.green",
            boxShadow: "0 0 0 1px palette.green",
          }}
        />

        {errors.date && (
          <Text color="red">{errors.date.message?.toString()}</Text>
        )}

        {/* Opponent name */}
        <FormLabel w="90%" htmlFor="opponent_name" textAlign={"start"} pl="5px">
          Nombre del equipo oponente
        </FormLabel>
        <Input
          id="opponent_name"
          placeholder="Nombre del equipo oponente"
          defaultValue={matchToUpdate?.opponent_name}
          type="text"
          {...register("opponent_name", {
            required: { value: true, message: "este campo es requerido" },
            minLength: {
              value: 2,
              message: "Debe tener como minimo dos caracteres",
            },
          })}
          borderRadius="6px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "palette.green",
            boxShadow: "0 0 0 1px palette.green",
          }}
        />

        {errors.opponent_name && (
          <Text color="red">{errors.opponent_name.message?.toString()}</Text>
        )}

        {/* Goles del equipo */}
        <FormLabel w="90%" htmlFor="team_goals" textAlign={"start"} pl="5px">
          Goles del equipo
        </FormLabel>
        <Input
          id="team_goals"
          placeholder="0"
          defaultValue={matchToUpdate?.team_goals}
          type="number"
          min="0"
          step="1"
          {...register("team_goals", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("team_goals", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.team_goals && (
          <Text color="red">{errors.team_goals.message?.toString()}</Text>
        )}

        {/* Goles del equipo oponente */}
        <FormLabel
          w="90%"
          htmlFor="opponent_goals"
          textAlign={"start"}
          pl="5px"
        >
          Goles del equipo oponente
        </FormLabel>
        <Input
          id="opponent_goals"
          placeholder="0"
          defaultValue={matchToUpdate?.opponent_goals}
          type="number"
          min="0"
          step="1"
          {...register("opponent_goals", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("opponent_goals", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.opponent_goals && (
          <Text color="red">{errors.opponent_goals.message?.toString()}</Text>
        )}

        {/* Tarjetas amarillas */}
        <FormLabel w="90%" htmlFor="yellow_cards" textAlign={"start"} pl="5px">
          Tarjetas amarillas
        </FormLabel>
        <Input
          id="yellow_cards"
          placeholder="0"
          defaultValue={matchToUpdate?.yellow_cards}
          type="number"
          min="0"
          step="1"
          {...register("yellow_cards", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("yellow_cards", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.yellow_cards && (
          <Text color="red">{errors.yellow_cards.message?.toString()}</Text>
        )}

        {/* Tarjetas rojas */}
        <FormLabel w="90%" htmlFor="red_cards" textAlign={"start"} pl="5px">
          Tarjetas rojas
        </FormLabel>
        <Input
          id="red_cards"
          placeholder="0"
          defaultValue={matchToUpdate?.red_cards}
          type="number"
          min="0"
          step="1"
          {...register("red_cards", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("red_cards", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.red_cards && (
          <Text color="red">{errors.red_cards.message?.toString()}</Text>
        )}

        {/* Disparos Efectivos */}
        <FormLabel w="90%" htmlFor="shots_taken" textAlign={"start"} pl="5px">
          Disparos Efectivos
        </FormLabel>
        <Input
          id="shots_taken"
          placeholder="0"
          defaultValue={matchToUpdate?.shots_taken}
          type="number"
          min="0"
          step="1"
          {...register("shots_taken", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("shots_taken", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.shots_taken && (
          <Text color="red">{errors.shots_taken.message?.toString()}</Text>
        )}

        {/* Disparos a porteria */}
        <FormLabel w="90%" htmlFor="shots_on_goal" textAlign={"start"} pl="5px">
          Disparos a portería
        </FormLabel>
        <Input
          id="shots_on_goal"
          placeholder="0"
          defaultValue={matchToUpdate?.shots_on_goal}
          type="number"
          min="0"
          step="1"
          {...register("shots_on_goal", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("shots_on_goal", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.shots_on_goal && (
          <Text color="red">{errors.shots_on_goal.message?.toString()}</Text>
        )}

        {/* Pases completados */}
        <FormLabel
          w="90%"
          htmlFor="completed_passes"
          textAlign={"start"}
          pl="5px"
        >
          Pases completados
        </FormLabel>
        <Input
          id="completed_passes"
          placeholder="0"
          defaultValue={matchToUpdate?.completed_passes}
          type="number"
          min="0"
          step="1"
          {...register("completed_passes", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("completed_passes", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.completed_passes && (
          <Text color="red">{errors.completed_passes.message?.toString()}</Text>
        )}

        {/* Faltas cometidas */}
        <FormLabel
          w="90%"
          htmlFor="fouls_comitted"
          textAlign={"start"}
          pl="5px"
        >
          Faltas cometidas
        </FormLabel>
        <Input
          id="fouls_comitted"
          placeholder="0"
          defaultValue={matchToUpdate?.fouls_comitted}
          type="number"
          min="0"
          step="1"
          {...register("fouls_comitted", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: {
              value: 1,
              message: "Debe ingresar al menos un número",
            },
          })}
          onChange={(e) => {
            setValue("fouls_comitted", Number(e.target.value));
          }}
          borderRadius="8px"
          mb="20px"
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.fouls_comitted && (
          <Text color="red">{errors.fouls_comitted.message?.toString()}</Text>
        )}

        {/* Equipo */}
        <FormLabel w="90%" htmlFor="team" textAlign={"start"}>
          Equipo
        </FormLabel>
        <Select
          // mr="62px"
          placeholder="Selecciona un rol"
          {...register("team", {
            required: { value: true, message: "este campo es requerido" },
          })}
          borderRadius="6px"
          mb="20px"
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
        >
          {teams.map(({ id_team, name }) => {
            return (
              <option
                key={id_team}
                value={Number(id_team)}
                className="optionForm"
              >
                {name}
              </option>
            );
          })}
        </Select>
        {errors.team && (
          <Text color="red">{errors.team.message?.toString()}</Text>
        )}

        {/* Torneo */}
        <FormLabel w="90%" htmlFor="tournament" textAlign={"start"}>
          Torneo
        </FormLabel>
        <Select
          // mr="62px"
          placeholder="Selecciona un rol"
          {...register("tournament", {
            required: { value: true, message: "este campo es requerido" },
          })}
          borderRadius="6px"
          mb="20px"
          _focusVisible={{
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
          _placeholder={{
            color: colorMode === "light" ? "" : "palette.white.100",
            opacity: 0.6,
            fontSize: "14px",
          }}
        >
          {tournaments.map(({ id_tournament, name }) => {
            return (
              <option
                key={id_tournament}
                value={Number(id_tournament)}
                className="optionForm"
              >
                {name}
              </option>
            );
          })}
        </Select>
        {errors.tournament && (
          <Text color="red">{errors.tournament.message?.toString()}</Text>
        )}

        <Button
          mt={"10px"}
          w="100%"
          bgColor="palette.green"
          _hover={{ bgColor: "#25aa5d" }}
          color={"white"}
          isLoading={isSubmitting}
          loadingText="loading..."
          type="submit"
        >
          {!id_match ? "Registrar" : "Actualizar"}
        </Button>
      </FormControl>
    </Flex>
  );
}
