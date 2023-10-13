import { ICreateAndUpdateTournament } from "@/models/response/ITournamentResponse";
import { updateTournament } from "@/services/tournament/tournamentService";
import { notify } from "@/shared/toastify/ToastConfig";

interface ITournamentUpdate {
  id_tournament: number;
  tournamentUpdate: ICreateAndUpdateTournament;
}

export const onSubmitUpdate = ({
  id_tournament,
  tournamentUpdate,
}: ITournamentUpdate): void => {
  updateTournament(id_tournament, tournamentUpdate)
    .then((res) => {
      notify({
        message: "Usuario actualizado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/tournament");
    })
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
