import { IRoleResponse } from "./IRoleResponse";

export interface IUserResponse {
  first_name: string;
  last_name: string;
  birthdate: string;
  cedula: string;
  phone: string;
  role: IRoleResponse;
  createdAt: Date;
  updatedAt: Date;
  id_user: number;
}
