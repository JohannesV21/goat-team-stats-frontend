import { ICreateAndUpdateMatch } from "@/models/response/IMatchResponse";
import { updateMatch } from "@/services/match/matchService";
import { notify } from "@/shared/toastify/ToastConfig";

interface IMatchUpdate {
  id_match: number;
  matchUpdate: ICreateAndUpdateMatch;
}

export const onSubmitUpdateMatch = ({
  id_match,
  matchUpdate,
}: IMatchUpdate): void => {
  updateMatch(id_match, matchUpdate)
    .then((res) => {
      notify({
        message: "Partido actualizado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/match");
    })
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
