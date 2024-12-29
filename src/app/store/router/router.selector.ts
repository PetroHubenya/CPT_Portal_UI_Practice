import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IRouterStateUrl } from './custom-serializer';

export const getRouterState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>('router');

export const getCurrentRouteUrl = createSelector(getRouterState, (router) => router.state.url);
