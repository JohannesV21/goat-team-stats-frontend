import { ILoginAndRegisterVerify } from "@/models/response/login/ILoginResponse";
import { createAdmin } from "@/services/admin/adminService";
import { notify } from "@/shared/toastify/ToastConfig";

/**
 * Sends a request to create a new admin.
 *
 * On success, notifies the user and redirects to the authentication page.
 *
 * On error, notifies the user about the issue.
 *
 * @param registerAdmin - Data of the admin to be registered.
 */

export const onSubmitRegister = (
  registerAdmin: ILoginAndRegisterVerify
): void => {
  createAdmin(registerAdmin)
    .then((res) => {
      console.log("in register");
      notify({
        message: "Usuario creado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/auth");
    })
    .catch((err) => {
      console.log(err);
      notify({
        message: `${err.response.data.message}`,
        typeOfMessage: "error",
      });
    });
};
