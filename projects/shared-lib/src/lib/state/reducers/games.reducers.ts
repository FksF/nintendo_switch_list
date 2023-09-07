import { createReducer, on } from '@ngrx/store';
import { loadGames, loadedGames, updateCart } from '../actions/games.actions';
import { GamesState } from '../../models/game.state';

export const initialState: GamesState = { loading: false, games: []}

export const gamesReducer = createReducer(
  initialState,
  on(loadGames, (state) => {
    return {...state, loading: true}
  }),
  on(loadedGames, (state, {games}) => {
    return {...state, loading: false, games}
  }),
  on(updateCart, (state, storeId) => {
    return {...state, loading: false}
  })
);
