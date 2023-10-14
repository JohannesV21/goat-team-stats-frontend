import { ICreateAndUpdateTeam } from "@/models/response/ITeamResponse";
import { updateTeam } from "@/services/team/teamService";
import { notify } from "@/shared/toastify/ToastConfig";

interface ITeamUpdate {
  id_team: number;
  teamUpdate: ICreateAndUpdateTeam;
}

export const onSubmitUpdateTeam = ({
  id_team,
  teamUpdate,
}: ITeamUpdate): void => {
  updateTeam(id_team, teamUpdate)
    .then((res) => {
      notify({
        message: "Team actualizado con exito!",
        typeOfMessage: "success",
      }),
        (window.location.href = "/team");
    })
    .catch((err) => notify({ message: `${err}`, typeOfMessage: "error" }));
};
