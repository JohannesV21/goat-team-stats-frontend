import LoginAndRegisterForm from "@/components/forms/login/LoginAndRegisterForm.component";
import ColorModeButton from "../../components/common/buttons/ColorModeButton.component";
import AuthLayout from "@/layouts/AuthLayout.component";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const handlerRegister = () => setIsRegister(!isRegister);
  console.log(isRegister);

  return (
    <>
      <Head>
        <title>Goat TeamStats</title>
        <meta
          name="description"
          content="Goat TeamStats: La herramienta esencial para administrar tu equipo de fútbol. Gestiona torneos, jugadores y partidos. Obtén estadísticas detalladas y disfruta de un diseño intuitivo y eficiente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
