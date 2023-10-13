import { IMatchResponse } from "@/models/response/IMatchResponse";
import { GetAllMatchesByTournament } from "@/services/match/matchService";
import { useEffect, useState } from "react";

export const useGetMatchesbyTournament = (id_tournament: number) => {
  const [matchesByTournament, setMatchesByTournament] = useState<
    Array<IMatchResponse>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMatchesByTournament = (id_tournament: number) => {
    setIsLoading(true);
    GetAllMatchesByTournament(id_tournament)
      .then((res) => {
        console.log("useGetMatchesbyTournament", res);
        setMatchesByTournament(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMatchesByTournament([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMatchesByTournament(id_tournament);
  }, [id_tournament]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     GetAllMatchesByTournament(id_tournament)
  //       .then((res) => {
  //         console.log("useGetMatchesbyTournament", res);
  //         setMatchesByTournament(res);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setMatchesByTournament([]);
  //         setIsLoading(false);
  //       });
  //   }, []);

  return { matchesByTournament, isLoading };
};
