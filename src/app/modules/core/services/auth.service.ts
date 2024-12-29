import { Inject, Injectable } from "@angular/core";
import { MsalService } from '@azure/msal-angular';
import { AccountInfo, AuthenticationResult, RedirectRequest } from "@azure/msal-browser";
import { Store } from "@ngrx/store";
import { EMPTY, Observable, catchError, take, tap, zip } from "rxjs";
import { AUTH_CONFIG } from "../../../../constants/constants";
import { logoutAction, signInAction } from "../../../store/auth/auth.actions";
import { selectAuth } from "../../../store/auth/auth.selector";
import { disableLoading, enableLoading } from "../../../store/loader/loader.actions";
// import { IUser } from "../interfaces/user.interface";
// import { AlertService } from "./alert.service";
// import { CacheService } from "./cache.service";
// import { UserManagementService } from "./user-management.service";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuth$: Observable<boolean>;
  activeAccount: AccountInfo | null = null;
  userId: string | null = null;

  constructor(
    private msalService: MsalService,
    private readonly store: Store,
    // private userManagementService: UserManagementService,
    // private cacheService: CacheService,
    // private alertService: AlertService
  ) {
    this.isAuth$ = this.store.select(selectAuth);
  }

  // Login using Azure AD B2C policy and scopes
  login() {
    const loginRequest: RedirectRequest = {
      scopes: AUTH_CONFIG.scopes,
      redirectUri: AUTH_CONFIG.redirectUri,
    };

    this.msalService.loginRedirect(loginRequest).subscribe();
  }

  // Logout and redirect to the configured post-logout URI
  // logout() {
  //   this.cacheService.clear(this.userId ?? "").subscribe(() => {
  //     this.store.dispatch(enableLoading());
  //     this.msalService.logoutRedirect({
  //       postLogoutRedirectUri: AUTH_CONFIG.postLogoutRedirectUri,
  //     });
  //     this.store.dispatch(logoutAction());
  //   });
  // }

  // Handle authentication result and user session
//   public setAuth(authResult?: AuthenticationResult) {
//     this.store.dispatch(enableLoading());

//     if (authResult) {
//       this.msalService.instance.setActiveAccount(authResult.account);
//       this.activeAccount = authResult.account;
//     } else {
//       this.activeAccount = this.msalService.instance.getActiveAccount();

//       const allAccounts = this.msalService.instance.getAllAccounts();
//       if (!this.activeAccount && allAccounts.length > 0) {
//         this.activeAccount = allAccounts[0];
//         this.msalService.instance.setActiveAccount(this.activeAccount);
//       }
//     }

//     if (!this.activeAccount) {
//       this.store.dispatch(logoutAction());
//       return;
//     }

//     zip(
//       this.isAuth$,
//       this.userManagementService.getCustomerByEmail(this.activeAccount.username)
//     ).pipe(
//       take(1),
//       tap(([_, user]) => this.userId = user.userId),
//       catchError((error) => {
//         let delay = 0;
//         if (error?.error?.Status === "Sequence contains no elements.") {
//           this.alertService.showError("No such user was found in the database");
//           delay = 4000;
//         }
//         setTimeout(() => {
//           this.logout();
//         }, delay);

//         return EMPTY;
//       })
//     ).subscribe(([isAuth, user]: [boolean, IUser]) => {
//       if (!isAuth) {
//         this.store.dispatch(disableLoading());
//         this.store.dispatch(signInAction({
//           isAuth: !isAuth,
//           user
//         }));
//       }
//     });
//   }
}