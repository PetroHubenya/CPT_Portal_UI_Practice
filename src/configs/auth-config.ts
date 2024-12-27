/* Centralize and manage the configuration required to integrate Microsoft Authentication Library (MSAL)
 with Azure AD B2C for handling user authentication and securing API resources. 
*/

import { BrowserCacheLocation, Configuration, LogLevel } from '@azure/msal-browser';
import { AUTH_CONFIG } from '../constants/constants';

// Detect if the browser is Internet Explorer (IE). This is necessary because MSAL handles caching differently for legacy browsers.
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1
  || window.navigator.userAgent.indexOf('Trident/') > -1;

// Define Azure AD B2C policies and their configurations.
export const b2cPolicies = {
  names: {
    signIn: AUTH_CONFIG.b2cPoliciesName.signin,
  },
  authorities: {
    signIn: { authority: AUTH_CONFIG.authorities.signin },
  },
  authorityDomain: AUTH_CONFIG.domain
};

// MSAL configuration for the application.
export const msalConfig: Configuration = {
  auth: {
    clientId: AUTH_CONFIG.clientID,
    authority: b2cPolicies.authorities.signIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: AUTH_CONFIG.redirectUri,
    postLogoutRedirectUri: AUTH_CONFIG.postLogoutRedirectUri,
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // Use local storage for token persistence.
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback: (logLevel, message, containsPii) => {
        if (!containsPii) {
          console.log(`[MSAL ${LogLevel[logLevel]}] ${message}`);
        }
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    }
  }
};

// Configuration for protected resources (APIs).
export const protectedResources = {
  endpoint: AUTH_CONFIG.protectedResource,
  scopes: AUTH_CONFIG.scopes,
};