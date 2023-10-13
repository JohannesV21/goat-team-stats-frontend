import { ITeamResponse } from "@/models/response/ITeamResponse";
import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";

export const getAllTeams = async (): Promise<Array<ITeamResponse>> => {
  try {
    const response = await http.get<never, AxiosResponse<Array<ITeamResponse>>>(
      `${BACK_URL}/team`,
      { headers: { Authorization: loadStorage().token } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
