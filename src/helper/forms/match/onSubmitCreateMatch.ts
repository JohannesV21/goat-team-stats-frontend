import { ICreateAndUpdateMatch } from "@/models/response/IMatchResponse";
import { createMatch } from "@/services/match/matchService";
import { notify } from "@/shared/toastify/ToastConfig";

export const onSubmitRegisterMatch = (
  registerValues: ICreateAndUpdateMatch
) => {
  createMatch(registerValues)
    .then((res) => {
      notify({
        message: "Partido creado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/match");
    })
    .catch((err) =>
      notify({ message: `Error al crear el partido.`, typeOfMessage: "error" })
    );
};
