import LoginForm from "@/components/forms/LoginForm.component";
import ColorModeButton from "../../components/buttons/ColorModeButton.component";
import AuthLayout from "@/layouts/AuthLayout.component";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import RegisterForm from "@/components/forms/RegisterForm.component";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const handlerRegister = () => setIsRegister(!isRegister);

  return (
    <>
      <AuthLayout>
        <Flex justifyContent="space-between" mt="20px">
          <ColorModeButton />

          <Button onClick={handlerRegister} bgColor="unset">
            {isRegister ? "login" : "Registrarse"}
            <ChevronRightIcon ml="5px" />
          </Button>
        </Flex>

        {isRegister ? <Text>REGISTER</Text> : <LoginForm />}
        <LoginForm />
      </AuthLayout>
    </>
  );
}
