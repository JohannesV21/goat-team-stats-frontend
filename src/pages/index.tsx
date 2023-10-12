import UserLayout from "@/layouts/UserLayout.component";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Goat TeamStats: La herramienta esencial para administrar tu equipo de fútbol. Gestiona torneos, jugadores y partidos. Obtén estadísticas detalladas y disfruta de un diseño intuitivo y eficiente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserLayout>
          <Text fontSize="32px">HOME</Text>
        </UserLayout>
      </main>
    </>
  );
}
