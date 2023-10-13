import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";
import {
  ICreateAndUpdateTournament,
  ITournamentResponse,
} from "@/models/response/ITournamentResponse";
import { ISuccessResponse } from "@/models/response/IGenericResponse";

export const getAllTournaments = async (): Promise<
  Array<ITournamentResponse>
> => {
  try {
    const response = await http.get<
      never,
      AxiosResponse<Array<ITournamentResponse>>
    >(`${BACK_URL}/tournament`, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTournament = async (
  createTournament: ICreateAndUpdateTournament
): Promise<ISuccessResponse<ITournamentResponse>> => {
  try {
    const response = await http.post<
      ICreateAndUpdateTournament,
      AxiosResponse<ISuccessResponse<ITournamentResponse>>
    >(`${BACK_URL}/tournament`, createTournament, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTournament = async (
  id_tournament: number,
  updateTournament: ICreateAndUpdateTournament
): Promise<ISuccessResponse<ITournamentResponse>> => {
  try {
    const response = await http.put<
      ICreateAndUpdateTournament,
      AxiosResponse<ISuccessResponse<ITournamentResponse>>
    >(`${BACK_URL}/tournament/${id_tournament}`, updateTournament, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTournament = async (
  id_tournament: number
): Promise<ITournamentResponse> => {
  try {
    const response = await http.delete<
      never,
      AxiosResponse<ITournamentResponse>
    >(`${BACK_URL}/tournament/${id_tournament}`, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
