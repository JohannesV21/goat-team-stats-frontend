import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import { login } from "@/services/login/loginService";
import { notify } from "@/shared/toastify/ToastConfig";

export const onSubmitLogin = (values: ILoginAndRegisterVerify) => {
  login(values)
    .then((res) => res)
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
