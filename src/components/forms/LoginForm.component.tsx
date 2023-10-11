import { onSubmitLogin } from "@/helper/forms/LoginForm";
import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { colorMode } = useColorMode();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ILoginAndRegisterVerify>();

  return (
    <Flex
      maxW="400px"
      w="100%"
      m="0 auto"
      minH={{ base: "calc(90vh - 60px)", xl: "calc(100vh - 60px)" }}
      justifyContent="center"
      alignItems="center"
    >
      <FormControl
        as={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <Heading m="30px auto" fontSize="32px">
          Login
        </Heading>

        {/* Email */}
        <FormLabel w="90%" htmlFor="email" textAlign={"start"}>
          Email
        </FormLabel>

        <Input
          id="email"
          placeholder="miguel@goat.com"
          type="email"
          {...register("email", {
            required: { value: true, message: "este campo es requerido" },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
              message: "Correo no valido",
            },
          })}
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

        {errors.email && (
          <Text color="red">{errors.email.message?.toString()}</Text>
        )}

        {/* Password */}
        <FormLabel w="90%" htmlFor="password">
          Password
        </FormLabel>

        <Input
          id="password"
          placeholder="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "este campo es requerido" },
            maxLength: { value: 12, message: "Maximo 12 caracteres" },
            minLength: {
              value: 8,
              message: "Debe tener minimo 8 caracteres",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.*?&#])[A-Za-z\d@$!%.*?&#]{8,}$/,
              message:
                "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, un número y un carácter especial (como @$!%*?&#).",
            },
          })}
          mb="20px"
          borderRadius="8px"
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

        {errors.password && (
          <Text color="red">{errors.password.message?.toString()}</Text>
        )}

        {/* Button submit */}
        <Button
          mt={"10px"}
          bgColor="#2DCC70"
          _hover={{ bgColor: "#1b958f" }}
          w="100%"
          isLoading={isSubmitting}
          loadingText="loading..."
          type="submit"
          color={"white"}
        >
          Login
        </Button>
      </FormControl>
    </Flex>
  );
}
