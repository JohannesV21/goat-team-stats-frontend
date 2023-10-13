import {
  ICreateAndUpdateTeam,
  ITeamResponse,
} from "@/models/response/ITeamResponse";
import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";

// get all teams
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

// service to create team
export const createTeam = async (
  createTournament: ICreateAndUpdateTeam
): Promise<ITeamResponse> => {
  try {
    const response = await http.post<
      ICreateAndUpdateTeam,
      AxiosResponse<ITeamResponse>
    >(`${BACK_URL}/team`, createTournament, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to update team
export const updateTeam = async (
  id_team: number,
  updateTeam: ICreateAndUpdateTeam
): Promise<ITeamResponse> => {
  try {
    const response = await http.put<
      ICreateAndUpdateTeam,
      AxiosResponse<ITeamResponse>
    >(`${BACK_URL}/team/${id_team}`, updateTeam, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to delete team
export const deleteTeam = async (id_team: number): Promise<ITeamResponse> => {
  try {
    const response = await http.delete<never, AxiosResponse<ITeamResponse>>(
      `${BACK_URL}/team/${id_team}`,
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
