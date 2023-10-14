import {
  ICreateAndUpdateUser,
  IUserResponse,
} from "@/models/response/IUserResponse";
import { BACK_URL, http } from "../login/httpService";
import { AxiosResponse } from "axios";
import { loadStorage } from "../login/loginService";

// get all users
export const getAllUsers = async (): Promise<Array<IUserResponse>> => {
  try {
    const response = await http.get<never, AxiosResponse<Array<IUserResponse>>>(
      `${BACK_URL}/users`,
      { headers: { Authorization: loadStorage().token } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get all users by team
export const GetAllUsersByTeam = async (
  id_team: number
): Promise<Array<IUserResponse>> => {
  try {
    const response = await http.get<never, AxiosResponse<Array<IUserResponse>>>(
      `${BACK_URL}/users/team/${id_team}`,
      { headers: { Authorization: loadStorage().token } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to create user
export const createUser = async (
  createUser: ICreateAndUpdateUser
): Promise<IUserResponse> => {
  try {
    const response = await http.post<
      ICreateAndUpdateUser,
      AxiosResponse<IUserResponse>
    >(`${BACK_URL}/users`, createUser, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to update user
export const updateUser = async (
  id_user: number,
  updateUser: ICreateAndUpdateUser
): Promise<IUserResponse> => {
  try {
    const response = await http.put<
      ICreateAndUpdateUser,
      AxiosResponse<IUserResponse>
    >(`${BACK_URL}/users/${id_user}`, updateUser, {
      headers: { Authorization: loadStorage().token },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// service to delete user
export const deleteUser = async (id_user: number): Promise<IUserResponse> => {
  try {
    const response = await http.delete<never, AxiosResponse<IUserResponse>>(
      `${BACK_URL}/users/${id_user}`,
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
