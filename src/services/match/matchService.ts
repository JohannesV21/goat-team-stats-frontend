import { IMatchResponse } from "@/models/response/IMatchResponse";
import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";

// service to get all matches
export const getAllMatches = async (): Promise<Array<IMatchResponse>> => {
  try {
    const response = await http.get<
      never,
      AxiosResponse<Array<IMatchResponse>>
    >(`${BACK_URL}/match`, { headers: { Authorization: loadStorage().token } });
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// service to get all matches by tournament
export const GetAllMatchesByTournament = async (
  id_tournament: number
): Promise<Array<IMatchResponse>> => {
  try {
    const response = await http.get<
      never,
      AxiosResponse<Array<IMatchResponse>>
    >(`${BACK_URL}/match/tournament/${id_tournament}`, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
