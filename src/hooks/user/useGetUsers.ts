import { useEffect, useState } from "react";
import { IUserResponse } from "../../models/response/IUserResponse";
import { getAllUsers } from "@/services/users/userService";

export const useGetUsers = () => {
  const [usersData, setUsersData] = useState<IUserResponse[]>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((res) => {
        setUsersData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return { usersData, isloading };
};
