import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GamesState } from '../../models/game.state';

export const selectGamesFeature = (state: AppState) => state.gamesList;

export const selectListGames = createSelector(
  selectGamesFeature,
  (state: GamesState) => state.games
);

export const selectLoading = createSelector(
  selectGamesFeature,
  (state: GamesState) => state.loading
);
