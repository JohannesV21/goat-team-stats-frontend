import { onSubmitRegisterTeam } from "@/helper/forms/team/onSubmitCreateTeam";
import { onSubmitUpdateTeam } from "@/helper/forms/team/onSubmitUpdateTeam";
import { onSubmitRegister } from "@/helper/forms/tournament/onSubmitRegister";
import { onSubmitUpdate } from "@/helper/forms/tournament/onSumitUpdate";
import {
  ICreateAndUpdateTeam,
  ITeamResponse,
} from "@/models/response/ITeamResponse";

import { loadStorage } from "@/services/login/loginService";
import {
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

interface ITeamRegisterUpdate {
  id_team?: number;
  teamToUpdate?: ITeamResponse | undefined;
}

export default function CreateAndUpdateTeam({
  id_team,
  teamToUpdate,
}: ITeamRegisterUpdate) {
  // Use form
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ICreateAndUpdateTeam>();
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" m="0 auto" justifyContent="center" alignItems="center">
      <FormControl
        as={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        onSubmit={handleSubmit((teamData) => {
          teamData.admin = loadStorage().id_admin;

          id_team
            ? onSubmitUpdateTeam({ id_team, teamUpdate: teamData })
            : onSubmitRegisterTeam(teamData);
        })}
      >
        {/* Name */}
        <FormLabel w="90%" htmlFor="name" textAlign={"start"} pl="5px">
          Nombre del Equipo
        </FormLabel>
        <Input
          id="name"
          placeholder="Nombre del equipo"
          defaultValue={teamToUpdate?.name}
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

        {/* Rif */}
        <FormLabel w="90%" htmlFor="rif" textAlign={"start"} pl="5px">
          Rif
        </FormLabel>
        <Input
          id="rif"
          placeholder="J-405326360"
          defaultValue={teamToUpdate?.rif}
          type="text"
          {...register("rif", {
            required: { value: true, message: "este campo es requerido" },
            minLength: {
              value: 2,
              message: "Debe tener como minimo dos caracteres",
            },
            pattern: {
              value: /^[J]-\d{1,10}$/,
              message:
                "El formato no es válido. Debe ser 'J-' seguido de hasta 9 números.",
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

        {errors.rif && (
          <Text color="red">{errors.rif.message?.toString()}</Text>
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
          {!id_team ? "Registrar" : "Actualizar"}
        </Button>
      </FormControl>
    </Flex>
  );
}
