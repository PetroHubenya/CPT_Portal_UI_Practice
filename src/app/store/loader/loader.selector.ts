import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ILoaderState } from './interfaces/loader-state.interface';
import { loaderNode } from './loader.reducer';

export const selectLoaderFeature = createFeatureSelector<ILoaderState>(loaderNode);

export const selectLoading = createSelector(
  selectLoaderFeature,
  (state: ILoaderState) => state.isLoadingEnabled
);
