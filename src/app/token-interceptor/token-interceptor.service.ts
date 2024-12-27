import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Observable, catchError, from, switchMap } from 'rxjs';
import { AUTH_CONFIG, LOCALSTORAGE_KEYS } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor {
  constructor(private msalService: MsalService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const activeAccount = this.msalService.instance.getActiveAccount();

    if (!activeAccount) {
      return next.handle(request);
    }

    return from(this.msalService.acquireTokenSilent({
      scopes: AUTH_CONFIG.scopes,
    })).pipe(
      switchMap((newToken: AuthenticationResult) => {
        localStorage.setItem(LOCALSTORAGE_KEYS.TOKEN, newToken.accessToken);
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${newToken.accessToken}`,
          }
        });
        return next.handle(request);
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
