import { Component, OnInit } from '@angular/core';
import { IGameCard } from '../models/game-card.interface';
import { GameService } from '../services/game.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private _gameService: GameService) {}
  games: IGameCard[] = [];

  ngOnInit(): void {
    this._gameService.getGames().subscribe((response) => {
      this.games = response;
      console.log(this.games);
    });

  }
}
