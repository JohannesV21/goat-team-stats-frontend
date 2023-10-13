import { onSubmitRegisterUser } from "@/helper/forms/user/onSubmitCreateUser";
import { onSubmitUpdateUser } from "@/helper/forms/user/onSubmitUpdateUser";
import { useGetRoles } from "@/hooks/role/useGetRoles";
import {
  ICreateAndUpdateUser,
  IUserResponse,
} from "@/models/response/IUserResponse";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface IUserRegisterUpdate {
  id_team: number;
  id_user?: number;
  userToUpdate?: IUserResponse | undefined;
}

export default function CreateAndUpdateUser({
  id_team,
  id_user,
  userToUpdate,
}: IUserRegisterUpdate) {
  const { roles } = useGetRoles();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ICreateAndUpdateUser>();
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" m="0 auto" justifyContent="center" alignItems="center">
      <FormControl
        as={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        onSubmit={handleSubmit((userData) => {
          userData.team = id_team;
          id_user
            ? onSubmitUpdateUser({ id_user, userUpdate: userData })
            : onSubmitRegisterUser(userData);
        })}
      >
        {/* Name */}
        <FormLabel w="90%" htmlFor="first_name" textAlign={"start"} pl="5px">
          Nombre
        </FormLabel>
        <Input
          id="first_name"
          placeholder="Pedro"
          defaultValue={userToUpdate?.first_name}
          type="text"
          {...register("first_name", {
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
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.first_name && (
          <Text color="red">{errors.first_name.message?.toString()}</Text>
        )}

        {/* Last name */}
        <FormLabel w="90%" htmlFor="last_name" textAlign={"start"} pl="5px">
          Apellido
        </FormLabel>
        <Input
          id="last_name"
          placeholder="López"
          defaultValue={userToUpdate?.last_name}
          type="text"
          {...register("last_name", {
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
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />

        {errors.last_name && (
          <Text color="red">{errors.last_name.message?.toString()}</Text>
        )}

        {/* Role */}
        <FormLabel w="90%" htmlFor="role" textAlign={"start"}>
          Role
        </FormLabel>
        <Select
          // mr="62px"
          placeholder="Selecciona un rol"
          {...register("role", {
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
          {roles.map(({ id_role, name }) => {
            return (
              <option
                key={id_role}
                value={Number(id_role)}
                className="optionForm"
              >
                {name}
              </option>
            );
          })}
        </Select>
        {errors.role && (
          <Text color="red">{errors.role.message?.toString()}</Text>
        )}

        {/* Birthdate */}
        <FormLabel w="90%" htmlFor="birthdate" textAlign={"start"} pl="5px">
          Fecha de nacimiento
        </FormLabel>
        <Input
          id="birthdate"
          defaultValue={userToUpdate?.birthdate}
          type="date"
          {...register("birthdate", {
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
        {errors.birthdate && (
          <Text color="red">{errors.birthdate.message?.toString()}</Text>
        )}

        {/* cedula */}
        <FormLabel w="90%" htmlFor="cedula" textAlign={"start"} pl="5px">
          Cédula
        </FormLabel>
        <Input
          id="cedula"
          placeholder="405326360"
          defaultValue={userToUpdate?.cedula}
          type="text"
          {...register("cedula", {
            required: { value: true, message: "este campo es requerido" },
            minLength: {
              value: 2,
              message: "Debe tener como minimo dos caracteres",
            },
            pattern: {
              value: /^\d{7,9}$/,
              message:
                "Debes ingresar como minino 7 y máximo 9 dígitos para sea una cédula válida.",
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

        {errors.cedula && (
          <Text color="red">{errors.cedula.message?.toString()}</Text>
        )}

        {/* Phone */}
        <FormLabel w="90%" htmlFor="phone" textAlign={"start"} pl="5px">
          Telefóno
        </FormLabel>
        <Input
          id="phone"
          placeholder="+584141253654"
          defaultValue={userToUpdate?.phone}
          type="text"
          {...register("phone", {
            required: { value: true, message: "este campo es requerido" },
            minLength: {
              value: 10,
              message: "Debe tener minimo 10 caracteres",
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
            borderColor: "#23bbb3",
            boxShadow: "0 0 0 1px #23bbb3",
          }}
        />
        {errors.phone && (
          <Text color="red">{errors.phone.message?.toString()}</Text>
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
          {!id_user ? "Registrar" : "Actualizar"}
        </Button>
      </FormControl>
    </Flex>
  );
}
