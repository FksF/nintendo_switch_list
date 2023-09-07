import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GamesComponent } from './games.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: GamesComponent }];

@NgModule({
  declarations: [GamesComponent],
  imports: [RouterModule.forChild(routes), CommonModule, GameCardComponent],
})
export class GamesModule {}
