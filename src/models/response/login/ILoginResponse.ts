export type ILoginResponse = {
  success: boolean;
  message: string;
  statusCode: number;
  token: string;
  refresh: string;
  payload: IPayload;
};

export type IPayload = {
  id_admin: number;
  email: string;
};

export interface IAdminInfo extends IPayload {
  token: string;
  refresh: string;
}

export type ILoginAndRegisterVerify = {
  email: string;
  password: string;
};
