import LoginAndRegisterForm from "@/components/forms/login/LoginAndRegisterForm.component";
import ColorModeButton from "../../components/common/buttons/ColorModeButton.component";
import AuthLayout from "@/layouts/AuthLayout.component";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const handlerRegister = () => setIsRegister(!isRegister);
  console.log(isRegister);

  return (
    <>
      <AuthLayout>
        <Flex justifyContent="space-between" mt="20px">
          <ColorModeButton />

          <Button onClick={handlerRegister} bgColor="unset">
            {isRegister ? "Registrarse" : "Login"}
            <ChevronRightIcon ml="5px" />
          </Button>
        </Flex>

        <LoginAndRegisterForm isRegister={isRegister} />
        {/* <LoginForm /> */}
      </AuthLayout>
    </>
  );
}
