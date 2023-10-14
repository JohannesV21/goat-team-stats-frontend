import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";
import { IRoleResponse } from "@/models/response/IRoleResponse";

// get all roles
export const getAllRoles = async (): Promise<Array<IRoleResponse>> => {
  try {
    const response = await http.get<never, AxiosResponse<Array<IRoleResponse>>>(
      `${BACK_URL}/role`,
      { headers: { Authorization: loadStorage().token } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
