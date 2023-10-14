import { IMatchResponse } from "../response/IMatchResponse";

export interface ISelectMatch {
  id_match: number;
}

export interface IMoreDetailsMatch {
  matches?: IMatchResponse;
}
