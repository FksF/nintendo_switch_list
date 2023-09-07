import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponseGames } from '../models/games-api.interface';
import { IGameCard } from '../models/game-card.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private _httpClient: HttpClient) {}

  getGames(): Observable<IGameCard[]> {
    const urlData: string = "/assets/games.json";
    return this._httpClient
      .get<IResponseGames>(urlData)
      .pipe(
        map((response) => {
          return response.games
            .map<IGameCard>((item) => ({
              productImage: item.productImage,
              title: item.title,
              releaseDate: item.releaseDate,
              price: item.price,
              platform: item.platform,
              storeId: item.storeId,
              wishList: false
            }));
        })
      );
  }
}
