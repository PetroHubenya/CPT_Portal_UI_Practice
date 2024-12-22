import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login/login.component';
import { ROUTES } from '../constants/constants';

export const routes: Routes = [
    { path: ROUTES.LOGIN, component: LoginComponent },
    // Redirect to security dashboard by default
    { 
        path: '', 
        redirectTo: ROUTES.SECUTITY_DASHBOARD, 
        pathMatch: 'full'
    },
    // Handle invalid routes
    {
        path: '**', 
        redirectTo: ROUTES.SECUTITY_DASHBOARD
    }
];
