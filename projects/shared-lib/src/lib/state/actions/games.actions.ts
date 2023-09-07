import { createAction, props } from '@ngrx/store';
import { ICommonGame } from '@shared-lib';

export const loadGames = createAction(
  '[Games List] Load games'
);

export const loadedGames = createAction(
  '[Games List] Loaded successfully',
  props<{ games: ICommonGame[] }>()
);

export const updateCart = createAction(
  '[Games List] Update cart',
  props<{ storeId: string }>()
);


