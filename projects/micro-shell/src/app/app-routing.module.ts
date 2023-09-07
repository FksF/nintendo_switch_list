import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('microGames/GamesModule').then((m) => m.GamesModule),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('microCart/CartComponent').then((c) => c.CartComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
