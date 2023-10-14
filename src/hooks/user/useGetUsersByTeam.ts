import { IUserResponse } from "@/models/response/IUserResponse";
import { GetAllUsersByTeam } from "@/services/users/userService";
import { useEffect, useState } from "react";

export const useGetUsersByTeam = (id_team: number) => {
  const [usersByTeam, setUsersByTeam] = useState<Array<IUserResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsersByTeam = (id_team: number) => {
    setIsLoading(true);
    GetAllUsersByTeam(id_team)
      .then((res) => {
        setUsersByTeam(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUsersByTeam([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUsersByTeam(id_team);
  }, [id_team]);

  return { usersByTeam, isLoading };
};
