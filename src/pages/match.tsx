import MatchesView from "@/components/match/MatchesView";
import UserLayout from "@/layouts/UserLayout.component";
import { Box } from "@chakra-ui/react";

export default function TeamPage() {
  return (
    <>
      <UserLayout>
        <Box m="0 auto" w="95%">
          <MatchesView />
        </Box>
      </UserLayout>
    </>
  );
}
