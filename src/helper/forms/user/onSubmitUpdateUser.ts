import { ICreateAndUpdateUser } from "@/models/response/IUserResponse";
import { updateUser } from "@/services/users/userService";
import { notify } from "@/shared/toastify/ToastConfig";

interface IUserUpdate {
  id_user: number;
  userUpdate: ICreateAndUpdateUser;
}

export const onSubmitUpdateUser = ({
  id_user,
  userUpdate,
}: IUserUpdate): void => {
  updateUser(id_user, userUpdate)
    .then((res) => {
      notify({
        message: "Usuario actualizado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/team");
    })
    .catch((err) =>
      notify({
        message: `Error al actualizar el usuario`,
        typeOfMessage: "error",
      })
    );
};
