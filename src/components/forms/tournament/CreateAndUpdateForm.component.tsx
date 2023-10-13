import { onSubmitRegister } from "@/helper/forms/tournament/onSubmitRegister";
import { onSubmitUpdate } from "@/helper/forms/tournament/onSumitUpdate";
import { useGetTeams } from "@/hooks/team/useGetTeams";
import {
  ICreateAndUpdateTournament,
  ITournamentResponse,
} from "@/models/response/ITournamentResponse";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface ITournamentRegisterUpdate {
  id_tournament?: number;
  tournamentToUpdate?: ITournamentResponse | undefined;
}

export default function CreateAndUpdateForm({
  id_tournament,
  tournamentToUpdate,
}: ITournamentRegisterUpdate) {
  // Use form
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ICreateAndUpdateTournament>();
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" m="0 auto" justifyContent="center" alignItems="center">
      <FormControl
        as={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        onSubmit={handleSubmit((tournamentData) => {
          id_tournament
            ? onSubmitUpdate({
                id_tournament,
                tournamentUpdate: tournamentData,
              })
            : onSubmitRegister(tournamentData);
        })}
      >
        {/* Name */}
        <FormLabel w="90%" htmlFor="name" textAlign={"start"} pl="5px">
          Nombre del torneo
        </FormLabel>
        <Input
          id="name"
          placeholder="Liga BBVA"
          defaultValue={tournamentToUpdate?.name}
          type="text"
          {...register("name", {
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

        {errors.name && (
          <Text color="red">{errors.name.message?.toString()}</Text>
        )}

        {/* Init date */}
        <FormLabel w="90%" htmlFor="init_date" textAlign={"start"} pl="5px">
          Fecha de inicio
        </FormLabel>
        <Input
          id="init_date"
          defaultValue={tournamentToUpdate?.init_date}
          type="date"
          {...register("init_date", {
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

        {errors.init_date && (
          <Text color="red">{errors.init_date.message?.toString()}</Text>
        )}

        {/* End date */}
        <FormLabel w="90%" htmlFor="end_date" textAlign={"start"} pl="5px">
          Fecha de fin
        </FormLabel>
        <Input
          id="end_date"
          defaultValue={tournamentToUpdate?.end_date}
          type="date"
          {...register("end_date", {
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

        {errors.end_date && (
          <Text color="red">{errors.end_date.message?.toString()}</Text>
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
          {!id_tournament ? "Registrar" : "Actualizar"}
        </Button>
      </FormControl>
    </Flex>
  );
}
