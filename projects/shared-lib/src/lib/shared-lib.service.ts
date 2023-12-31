import { Injectable } from '@angular/core';
import { ICommonGame } from './models/game.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  private _games: ICommonGame[] = [];

  private _channelSource = new BehaviorSubject<number>(0);
  channelPayment$ = this._channelSource.asObservable();

  private _gamesS = new BehaviorSubject<ICommonGame[]>(this._games);

  sendData(game: ICommonGame): void {
    this._games.push(game);
    this._gamesS.next(this._games);
    this._channelSource.next(this._games.length);
  }


  getGames(): ICommonGame[] {
    return this._games;
  }
}
