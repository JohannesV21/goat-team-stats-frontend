import { ISuccessResponse } from "@/models/response/IGenericResponse";
import { ITournamentResponse } from "@/models/response/ITournamentResponse";
import { deleteTournament } from "@/services/tournament/tournamentService";
import { notify } from "@/shared/toastify/ToastConfig";

export const deleteTournamentHelper = (id_tournament: number) => {
  deleteTournament(id_tournament)
    .then((res: ISuccessResponse<ITournamentResponse>) => {
      console.log(res);
      notify({
        message: `Eliminado con exito ${res.data.name}`,
        typeOfMessage: "success",
      });
    })
    .catch((err) => {
      notify({ message: `Error al eliminar`, typeOfMessage: "error" });
    });
};
