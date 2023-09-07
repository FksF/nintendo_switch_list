import { Component, OnInit } from '@angular/core';
import { IGameCard } from '../models/game-card.interface';
import { GameService } from '../services/game.service';
import { Store } from '@ngrx/store';
import { AppState, ICommonGame, loadGames, loadedGames, selectListGames, selectLoading } from '@shared-lib';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  games$: Observable<ICommonGame[]> = new Observable();
  games: IGameCard[] = [];
  constructor(private _gameService: GameService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadGames());
    this._gameService.getGames().subscribe((response: ICommonGame[]) => {
      this.games = response;
      this.store.dispatch(loadedGames({games: response}));
    });

    this.games$ = this.store.select(selectListGames);
  }
}
