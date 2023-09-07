import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppState, SharedLibService, loadedGames, updateCart } from '@shared-lib';
import { IGameCard } from '../../../models/game-card.interface';
import { Store } from '@ngrx/store';
@Component({
  standalone: true,
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  imports: [CommonModule],
})
export class GameCardComponent {
  @Input() game?: IGameCard;

  constructor(private _sharedLibService: SharedLibService, private store: Store<AppState>) {}
  clickCard(game: IGameCard): void {
    this._sharedLibService.sendData(game);
    this.store.dispatch(updateCart({storeId: game.storeId}));
  }
}
