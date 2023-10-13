import { ICreateAndUpdateUser } from "@/models/response/IUserResponse";
import { createUser } from "@/services/users/userService";
import { notify } from "@/shared/toastify/ToastConfig";

export const onSubmitRegisterUser = (registerValues: ICreateAndUpdateUser) => {
  createUser(registerValues)
    .then((res) => {
      notify({
        message: "Usuario creado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/team");
    })
    .catch((err) =>
      notify({ message: `Error al crear el team`, typeOfMessage: "error" })
    );
};
