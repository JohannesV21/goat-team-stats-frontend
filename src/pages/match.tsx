import MatchesView from "@/components/match/MatchesView";
import UserLayout from "@/layouts/UserLayout.component";
import { Box } from "@chakra-ui/react";

export default function MatchPage() {
  return (
    <>
      <UserLayout>
        <Box m="30px auto" w="95%">
          <MatchesView />
        </Box>
      </UserLayout>
    </>
  );
}
