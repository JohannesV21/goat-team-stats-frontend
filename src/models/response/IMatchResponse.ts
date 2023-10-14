import { ITeamResponse } from "./ITeamResponse";
import { ITournamentResponse } from "./ITournamentResponse";

export interface IMatchResponse {
  date: string;
  opponent_name: string;
  team_goals: number;
  opponent_goals: number;
  yellow_cards: number;
  red_cards: number;
  shots_taken: number;
  shots_on_goal: number;
  completed_passes: number;
  fouls_comitted: number;
  team: ITeamResponse;
  tournament: ITournamentResponse;
  createdAt: Date;
  updatedAt: Date;
  id_match: number;
}

export interface ICreateAndUpdateMatch {
  date: string;
  opponent_name: string;
  team_goals: number;
  opponent_goals: number;
  yellow_cards: number;
  red_cards: number;
  shots_taken: number;
  shots_on_goal: number;
  completed_passes: number;
  fouls_comitted: number;
  team: number;
  tournament: number;
}
