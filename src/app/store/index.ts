import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authNode, authReducer } from './auth/auth.reducer';
import { IAuthState } from './auth/interfaces/auth-state.interface';
import { ILoaderState } from './loader/interfaces/loader-state.interface';
import { loaderNode, loaderReducer } from './loader/loader.reducer';
import { IModulesState } from './modules/interfaces/modules-state.interface';
import { modulesNode, modulesReducer } from './modules/modules.reducer';
import { IRolesState } from './roles/interfaces/roles-state.interface';
import { rolesNode, rolesReducer } from './roles/roles.reducer';

export interface IState {
  [authNode]: IAuthState,
  [loaderNode]: ILoaderState,
  [rolesNode]: IRolesState,
  router: RouterReducerState,
  [modulesNode]: IModulesState, 
}

export const reducers: ActionReducerMap<IState> = {
  [authNode]: authReducer,
  [loaderNode]: loaderReducer,
  [rolesNode]: rolesReducer,
  router: routerReducer,
  [modulesNode]: modulesReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
