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
  on(updateCart, (state, objectID) => {
    return updateObject(state, objectID);
  })
);

const updateObject = (state: GamesState, action: any) => {
  let index = state.games.findIndex((ele)=>{
    return ele.objectID === action.objectID;
  });
  return {...state, loading: false, games: [...state.games.slice(0, index),{...state.games[index],wishList: true},...state.games.slice(index + 1)]};
}
