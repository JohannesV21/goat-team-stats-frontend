import axios, { AxiosError } from "axios";
import { IErrorResponse } from "@/models/response/IErrorResponse";
import { clearStorage } from "./loginService";
import { notify } from "@/shared/toastify/ToastConfig";

//===== URLs
export const BACK_URL = "http://localhost:3005";
//=====//

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export const validateErrorResponse = ({
  error,
  defaultMessage,
}: {
  error: AxiosError<IErrorResponse>;
  defaultMessage: string;
}) => {
  const { response } = error;
  if (response) {
    notify({ message: `${response.data.error}`, typeOfMessage: "error" });
    if (response.status === 401) {
      clearStorage();
    }
  } else {
    notify({ message: defaultMessage, typeOfMessage: "error" });
  }
};
