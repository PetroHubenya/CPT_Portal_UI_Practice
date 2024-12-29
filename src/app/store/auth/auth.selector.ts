import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authNode } from './auth.reducer';
import { IAuthState } from './interfaces/auth-state.interface';

export const selectAuthFeature = createFeatureSelector<IAuthState>(authNode);

export const selectAuth = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.isAuth
);
export const selectUserInfo = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state
);
