import { IAdminResponse } from "./IAdminResponse";
import { IUserResponse } from "./IUserResponse";

export interface ITeamResponse {
  name: string;
  rif: string;
  admin: IAdminResponse;
  createdAt: Date;
  updatedAt: Date;
  id_team: number;
  users: Array<IUserResponse>;
}

export interface ICreateAndUpdateTeam {
  name: string;
  rif: string;
  admin?: number;
}
