import { IUserResponse } from "@/models/response/IUserResponse";
import { deleteUser } from "@/services/users/userService";
import { notify } from "@/shared/toastify/ToastConfig";

export const deleteUserHelper = (id_user: number) => {
  deleteUser(id_user)
    .then((res: IUserResponse) => {
      console.log(res);
      notify({
        message: `Eliminado con exito!`,
        typeOfMessage: "success",
      });
    })
    .catch((err) => {
      notify({ message: `Error al eliminar `, typeOfMessage: "error" });
    });
};
