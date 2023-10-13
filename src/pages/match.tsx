import MatchesView from "@/components/match/MatchesView";
import { useGetMatches } from "@/hooks/match/useGetMatches";
import UserLayout from "@/layouts/UserLayout.component";
import { Box } from "@chakra-ui/react";

export default function MatchPage() {
  const { matches, isLoading } = useGetMatches();
  return (
    <>
      <UserLayout>
        <Box m="30px auto" w="95%">
          <MatchesView matches={matches} isLoading={isLoading} />
        </Box>
      </UserLayout>
    </>
  );
}
