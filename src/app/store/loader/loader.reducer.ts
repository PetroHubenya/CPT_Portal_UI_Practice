import { createReducer, on } from '@ngrx/store';

import { ILoaderState } from './interfaces/loader-state.interface';
import { disableLoading, enableLoading } from './loader.actions';

export const loaderNode = 'loader';

const initialState: ILoaderState = {
  isLoadingEnabled: true
};

export const loaderReducer = createReducer<ILoaderState>(
  initialState,
  on(enableLoading, (state): ILoaderState => ({
    ...state,
    isLoadingEnabled: true
  })),
  on(disableLoading, (state): ILoaderState => ({
    ...state,
    isLoadingEnabled: false
  })),
);
