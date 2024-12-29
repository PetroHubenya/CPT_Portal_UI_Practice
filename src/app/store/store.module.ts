import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AppEffectsModule } from './effects.module';
import { IState, reducers } from './index';
import { CustomSerializer } from './router/custom-serializer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot<IState>(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    AppEffectsModule,
  ],
})
export class AppStoreModule { }