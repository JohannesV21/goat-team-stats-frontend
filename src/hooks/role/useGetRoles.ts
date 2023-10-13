import { IRoleResponse } from "@/models/response/IRoleResponse";
import { getAllRoles } from "@/services/roles/roleService";
import { useEffect, useState } from "react";

export const useGetRoles = () => {
  const [roles, setRoles] = useState<IRoleResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllRoles()
      .then((res) => {
        setRoles(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { roles, loading };
};
