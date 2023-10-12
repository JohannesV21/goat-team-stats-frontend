import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import { login } from "@/services/login/loginService";
import { notify } from "@/shared/toastify/ToastConfig";

/**
 * Helper function to manage the login form data.
 *
 * If successful, the user's session is established.
 *
 * If an error occurs, the user is notified of the error.
 *
 * @param loginValues - User credentials used for the login attempt.
 */

export const onSubmitLogin = (loginValues: ILoginAndRegisterVerify) => {
  login(loginValues)
    .then((res) => res)
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
