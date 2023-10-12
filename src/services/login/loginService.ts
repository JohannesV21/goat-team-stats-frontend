import {
  ILoginResponse,
  ILoginAndRegisterVerify,
  IAdminInfo,
} from "@/models/response/login/ILoginResponse";
import { AxiosResponse } from "axios";
import { notify } from "@/shared/toastify/ToastConfig";
import { BACK_URL, http } from "./httpService";

export const login = (
  loginForm: ILoginAndRegisterVerify
): Promise<ILoginResponse> => {
  return new Promise((resolve, reject) => {
    http
      .post<ILoginAndRegisterVerify, AxiosResponse<ILoginResponse>>(
        `${BACK_URL}/login`,
        loginForm
      )
      .then((res) => {
        const { refresh, token, payload } = res.data;
        const { id_admin, email } = payload;
        saveStorage({
          id_admin,
          email,
          token,
          refresh,
        });
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data.message || err);
        } else reject(err);
      });
  });
};

export const saveStorage = (admin: IAdminInfo) => {
  localStorage.setItem("admin", JSON.stringify(admin));
  window.location.href = "/";
};

export const loadStorage = (): IAdminInfo => {
  const adminStorage = JSON.parse(localStorage.getItem("admin") || "{}");
  return adminStorage;
};

export const clearStorage = () => {
  localStorage.removeItem("admin");
  window.location.href = "/auth";
};
