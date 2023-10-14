import { ICreateAndUpdateTeam } from "@/models/response/ITeamResponse";
import { createTeam } from "@/services/team/teamService";
import { notify } from "@/shared/toastify/ToastConfig";

export const onSubmitRegisterTeam = (registerValues: ICreateAndUpdateTeam) => {
  createTeam(registerValues)
    .then((res) => {
      notify({
        message: "Team creado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/team");
    })
    .catch((err) =>
      notify({ message: `Error al crear el team`, typeOfMessage: "error" })
    );
};
