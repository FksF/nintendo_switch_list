import { Component, OnInit } from '@angular/core';
import { IGameCard } from '../models/game-card.interface';
import { GameService } from '../services/game.service';
import { Store } from '@ngrx/store';
import {
  AppState,
  ICommonGame,
  loadGames,
  loadedGames,
  selectListGames,
  selectLoading,
} from '@shared-lib';
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

  currentPage = 1;
  itemsPerPage = 80;

  constructor(
    private _gameService: GameService,
    private store: Store<AppState>
  ) {}

  loadData = () => {
    this.store.dispatch(loadGames());
    this._gameService.getItems(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => this.store.dispatch(loadedGames({ games: response })),
      error: (err) => console.log(err),
    });
  };

  appendData = () => {
    this.store.dispatch(loadGames());
    this._gameService
      .getItems(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response) => (this.store.dispatch(loadedGames({ games: response }))),
        error: (err) => console.log(err)
      });
  };

  onScroll = () => {
    console.log("SCROLLL");

    this.currentPage++;
    this.appendData();
  };
  ngOnInit(): void {
    this.loadData();
    this.loading$ = this.store.select(selectLoading);
    this.games$ = this.store.select(selectListGames);
  }
}
