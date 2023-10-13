import { ICreateAndUpdateTournament } from "@/models/response/ITournamentResponse";
import { createTournament } from "@/services/tournament/tournamentService";
import { notify } from "@/shared/toastify/ToastConfig";

export const onSubmitRegister = (
  registerValues: ICreateAndUpdateTournament
) => {
  // adding the client role
  createTournament(registerValues)
    .then((res) => {
      notify({
        message: "Usuario creado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/tournament");
    })
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
