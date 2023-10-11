import { useEffect } from "react";
import { toast } from "react-toastify";

export const useToastify = () => {
  useEffect(() => {
    toast.configure();
  }, []);
};
