import Cookies from "js-cookie";
import { NextApiRequest } from "next";
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
  // Guarda cada propiedad en una cookie
  Cookies.set("id_admin", admin.id_admin.toString());
  Cookies.set("email", admin.email);
  Cookies.set("token", admin.token);
  Cookies.set("refresh", admin.refresh);

  window.location.href = "/";
};

export const loadStorage = (): IAdminInfo => {
  // Recupera cada propiedad de las cookies
  const id_admin = parseInt(Cookies.get("id_admin") || "0");
  const email = Cookies.get("email") || "";
  const token = Cookies.get("token") || "";
  const refresh = Cookies.get("refresh") || "";

  return { id_admin, email, token, refresh };
};

export const clearStorage = () => {
  // Elimina cada cookie
  Cookies.remove("id_admin");
  Cookies.remove("email");
  Cookies.remove("token");
  Cookies.remove("refresh");

  window.location.href = "/auth";
};

export const getTokenFromServerCookies = (
  req: NextApiRequest
): string | undefined => {
  const rawCookies = req.headers.cookie?.split("; ");
  const parsedCookies: { [key: string]: string } = {};
  rawCookies?.forEach((rawCookie) => {
    const [key, value] = rawCookie.split("=");
    parsedCookies[key] = value;
  });
  return parsedCookies["token"];
};
