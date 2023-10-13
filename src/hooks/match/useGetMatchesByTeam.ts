import { IMatchResponse } from "@/models/response/IMatchResponse";
import { GetAllMatchesByTeam } from "@/services/match/matchService";
import { useEffect, useState } from "react";

export const useGetMatchesbyTeam = (id_team: number) => {
  const [matchesByTeam, setMatchesByTeam] = useState<Array<IMatchResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMatchesByTeam = (id_team: number) => {
    setIsLoading(true);
    GetAllMatchesByTeam(id_team)
      .then((res) => {
        console.log("useGetMatchesbyTeam", res);
        setMatchesByTeam(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMatchesByTeam([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMatchesByTeam(id_team);
  }, [id_team]);

  return { matchesByTeam, isLoading };
};
