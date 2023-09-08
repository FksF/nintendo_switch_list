import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IResponseGames } from '../models/games-api.interface';
import { IGameCard } from '../models/game-card.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
  private totalItems = 80;

  constructor(private _httpClient: HttpClient) {}

  getGames(): Observable<IGameCard[]> {
    const urlData: string = '/assets/games.json';
    return this._httpClient.get<IResponseGames>(urlData).pipe(
      map((response) => {
        return response.games.map<IGameCard>((item) => ({
          productImage: item.productImage,
          title: item.title,
          releaseDate: item.releaseDate,
          price: item.price,
          platform: item.platform,
          objectID: item.objectID,
          wishList: false,
        }));
      })
    );
  }

  getItems(page = 1, itemsPerPage = 10): Observable<IGameCard[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items: IGameCard[] = [];
    this.getGames().subscribe((game) => {
      for (let i = startIndex; i < endIndex; i++) {
        if (i < this.totalItems) {
          items.push(game[i]);
        }
      }
    });
    return of(items).pipe(delay(500));
  }
}
