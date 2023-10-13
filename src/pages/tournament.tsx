import TournamentCard from "@/components/tournament/TournamentCard";
import UserLayout from "@/layouts/UserLayout.component";
import { Box, Heading } from "@chakra-ui/react";

export default function TournamentPage() {
  return (
    <>
      <UserLayout>
        <Box w={"95%"} m="0 auto">
          <Heading m="30px 0 0 30px" fontSize="24px">
            Torneos
          </Heading>

          <TournamentCard />
        </Box>
      </UserLayout>
    </>
  );
}
