import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedLibService } from '@shared-lib';
import { IGameCard } from '../../../models/game-card.interface';
@Component({
  standalone: true,
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  imports: [CommonModule],
})
export class GameCardComponent {
  @Input() game?: IGameCard;

  constructor(private _SharedLibService: SharedLibService) {}
  clickCard(game: IGameCard): void {
    this._SharedLibService.sendData(game);
  }
}
