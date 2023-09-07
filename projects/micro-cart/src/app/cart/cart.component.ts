import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedLibService, ICommonGame } from '@shared-lib';
@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  games: ICommonGame[] = [];

  constructor(private sharedLibService: SharedLibService) {
    this.games = this.sharedLibService.getGames();
  }


  ngOnInit(): void {
  }

  removeFromCart( game: ICommonGame ): void {

  }
}
