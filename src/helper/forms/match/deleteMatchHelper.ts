import { IMatchResponse } from "@/models/response/IMatchResponse";
import { deleteMatch } from "@/services/match/matchService";
import { notify } from "@/shared/toastify/ToastConfig";

export const deleteMatchHelper = (id_match: number) => {
  deleteMatch(id_match)
    .then((res: IMatchResponse) => {
      console.log(res);
      notify({
        message: `Eliminado con exito`,
        typeOfMessage: "success",
      });
    })
    .catch((err) => {
      notify({ message: `Error al eliminar `, typeOfMessage: "error" });
    });
};
