import { ITournamentResponse } from "@/models/response/ITournamentResponse";
import { getAllTournaments } from "@/services/tournament/tournamentService";
import { useEffect, useState } from "react";

export const useGetTournaments = () => {
  const [tournaments, setTournaments] = useState<Array<ITournamentResponse>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllTournaments()
      .then((res) => {
        console.log("all Tournaments", res);

        setTournaments(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setTournaments([]);
        setIsLoading(false);
      });
  }, []);

  return { tournaments, isLoading };
};
