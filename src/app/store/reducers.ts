import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

// Define your application's state
export interface AppState {
  router: any; // Add specific router state if using custom serializer
}

// Combine your application's reducers
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

// Optional meta-reducers
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
