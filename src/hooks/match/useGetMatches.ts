import { IMatchResponse } from "@/models/response/IMatchResponse";
import { getAllMatches } from "@/services/match/matchService";
import { useEffect, useState } from "react";

export const useGetMatches = () => {
  const [matches, setmatches] = useState<Array<IMatchResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllMatches()
      .then((res) => {
        console.log("all matches", res);

        setmatches(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setmatches([]);
        setIsLoading(false);
      });
  }, []);

  return { matches, isLoading };
};
