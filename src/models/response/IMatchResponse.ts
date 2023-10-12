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
  team: ITeam;
  tournament: ITournament;
  createdAt: Date;
  updatedAt: Date;
  id_match: number;
}

export interface ITeam {
  name: string;
  rif: string;
  createdAt: Date;
  updatedAt: Date;
  id_team: number;
}

export interface ITournament {
  name: string;
  init_date: string;
  end_date: string;
  createdAt: Date;
  updatedAt: Date;
  id_tournament: number;
}
