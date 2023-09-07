import { ICommonGame } from "./game.interface";

export interface GamesState {
  loading: boolean,
  games: ICommonGame[];
}
