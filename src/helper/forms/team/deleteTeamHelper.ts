import { ITeamResponse } from "@/models/response/ITeamResponse";
import { deleteTeam } from "@/services/team/teamService";
import { notify } from "@/shared/toastify/ToastConfig";

export const deleteTeamHelper = (id_team: number) => {
  deleteTeam(id_team)
    .then((res: ITeamResponse) => {
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
