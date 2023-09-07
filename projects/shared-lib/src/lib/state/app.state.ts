import { ActionReducerMap } from "@ngrx/store";
import { GamesState } from "../models/game.state";
import { gamesReducer } from "./reducers/games.reducers";

export interface AppState {
  gamesList: GamesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  gamesList: gamesReducer
}
