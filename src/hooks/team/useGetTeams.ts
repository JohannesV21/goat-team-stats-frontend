import { ITeamResponse } from "@/models/response/ITeamResponse";
import { getAllMatches } from "@/services/match/matchService";
import { getAllTeams } from "@/services/team/teamService";
import { useEffect, useState } from "react";

export const useGetTeams = () => {
  const [teams, setTeams] = useState<Array<ITeamResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllTeams()
      .then((res) => {
        setTeams(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setTeams([]);
        setIsLoading(false);
      });
  }, []);

  return { teams, isLoading };
};
