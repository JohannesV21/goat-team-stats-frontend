import {
  ICreateAndUpdateMatch,
  IMatchResponse,
} from "@/models/response/IMatchResponse";
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
// service to get all matches by team
export const GetAllMatchesByTeam = async (
  id_team: number
): Promise<Array<IMatchResponse>> => {
  try {
    const response = await http.get<
      never,
      AxiosResponse<Array<IMatchResponse>>
    >(`${BACK_URL}/match/team/${id_team}`, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// service to create match
export const createMatch = async (
  createMatch: ICreateAndUpdateMatch
): Promise<IMatchResponse> => {
  try {
    const response = await http.post<
      ICreateAndUpdateMatch,
      AxiosResponse<IMatchResponse>
    >(`${BACK_URL}/match`, createMatch, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to update match
export const updateMatch = async (
  id_match: number,
  updateMatch: ICreateAndUpdateMatch
): Promise<IMatchResponse> => {
  try {
    const response = await http.put<
      ICreateAndUpdateMatch,
      AxiosResponse<IMatchResponse>
    >(`${BACK_URL}/match/${id_match}`, updateMatch, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to delete team
export const deleteMatch = async (
  id_match: number
): Promise<IMatchResponse> => {
  try {
    const response = await http.delete<never, AxiosResponse<IMatchResponse>>(
      `${BACK_URL}/match/${id_match}`,
      {
        headers: { Authorization: loadStorage().token },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
