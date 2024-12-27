import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuard, MsalInterceptor, MsalModule, MsalService } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { Observable } from 'rxjs';
import { msalConfig, protectedResources } from '../../../configs/auth-config';
// import { TokenInterceptor } from '../../../token-interceptor/token-interceptor.service';

// MSAL Initialization
export function initializeMsal(msalService: MsalService): () => Observable<void> {
  return () => msalService.initialize();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MSAL Module Configuration.
    MsalModule.forRoot(
      new PublicClientApplication(msalConfig),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.scopes
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          [protectedResources.endpoint, protectedResources.scopes]
        ])
      }
    ),
  ],
  // Providers for Authentication.
  providers: [
    MsalService,
    {
      provide: MSAL_GUARD_CONFIG,
      useValue: {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.scopes
        }
      }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMsal,
      deps: [MsalService],
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ]
})
export class AuthModule { }