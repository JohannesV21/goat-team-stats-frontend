import { onSubmitLogin } from "@/helper/forms/login/loginForm";
import { onSubmitRegister } from "@/helper/forms/login/registerForm";
import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValidation {
  isRegister: boolean;
}

export default function LoginAndRegisterForm({ isRegister }: IFormValidation) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
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
        onSubmit={handleSubmit((formData) => {
          isRegister ? onSubmitLogin(formData) : onSubmitRegister(formData);
        })}
      >
        <Heading m="30px auto" fontSize="32px">
          {isRegister ? "Login" : "Registrarse"}
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

        <InputGroup size="md">
          <Input
            id="password"
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
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

          <InputRightElement width="3rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleShowPassword}
              bg="none"
              _hover={{ bg: "none" }}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>

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
          Enviar
        </Button>
      </FormControl>
    </Flex>
  );
}
