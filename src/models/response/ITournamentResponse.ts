import { IMatchResponse } from "./IMatchResponse";
import { ITeamResponse } from "./ITeamResponse";

export interface ITournamentResponse {
  name: string;
  init_date: string;
  end_date: string;
  team: ITeamResponse;
  createdAt: Date;
  updatedAt: Date;
  id_tournament: number;
  matches: IMatchResponse[];
}

export interface ICreateAndUpdateTournament {
  name: string;
  init_date: string;
  end_date: string;
  team: number;
}
