import { CommonModule } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GamesComponent } from './games.component';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from '@shared-lib';

const routes: Routes = [{ path: '', component: GamesComponent }];

@NgModule({
  declarations: [GamesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    GameCardComponent,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class GamesModule {}
