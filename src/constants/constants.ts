import { environment } from '../environments/environment';

// Route configuration.
export const ROUTES = {
    AUTH: 'auth',
    LOGIN: 'login',
    HOME: 'home',
    SECURITY_DASHBOARD: 'security_dashboard',
    EXTERNAL_SURFACE_ASSETS: 'external_surface_assets',
    VULNERABILITIES: 'vulnerabilities',
    EMAIL_HEALTH: 'email_health',
    PUBLIC_DATA: 'public_data', // Suspicious urls emails page.
    CUSTOMERS: 'customers', // Admin selects a customer to display.
}

// Azure AD configuration settings.
export const AUTH_CONFIG = {
    b2cPoliciesName: { signin: environment.azure.authFLowName },
    authorities: { signin: environment.azure.authFlowLink },
    domain: environment.azure.domain,
    clientID: environment.azure.clientID,
    redirectUri: '/auth',
    postLogoutRedirectUri: '/login',
    protectedResource: environment.apiUrl,
    scopes: environment.azure.scopes
};