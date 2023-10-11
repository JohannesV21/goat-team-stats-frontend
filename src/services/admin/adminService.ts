import { IAdminResponse } from "@/models/response/IAdminResponse";
import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import { AxiosResponse } from "axios";
import { BACK_URL, http } from "../login/httpService";

export const createAdmin = async (
  registerAdmin: ILoginAndRegisterVerify
): Promise<IAdminResponse> => {
  try {
    const response = await http.post<
      ILoginAndRegisterVerify,
      AxiosResponse<IAdminResponse>
    >(`${BACK_URL}/admin`, registerAdmin);

    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
