import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuard, MsalInterceptor, MsalModule, MsalService } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { provideAppInitializer } from '@angular/core';
import { msalConfig, protectedResources } from '../../../configs/auth-config';
import { TokenInterceptor } from '../../token-interceptor/token-interceptor.service';
import { Observable } from 'rxjs';

// MSAL Initialization Function
export function initializeMsal(): Observable<void> {
  const msalService = inject(MsalService);
  return msalService.initialize();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MSAL Module Configuration
    MsalModule.forRoot(
      new PublicClientApplication(msalConfig),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.scopes,
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          [protectedResources.endpoint, protectedResources.scopes],
        ]),
      }
    ),
  ],
  providers: [
    MsalService,
    {
      provide: MSAL_GUARD_CONFIG,
      useValue: {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.scopes,
        },
      },
    },
    provideAppInitializer(() => initializeMsal()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
  ],
})

export class AuthModule {}