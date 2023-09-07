import { NgModule, isDevMode } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';


@NgModule({
  declarations: [
    SharedLibComponent
  ],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [
    SharedLibComponent
  ]
})
export class SharedLibModule { }
