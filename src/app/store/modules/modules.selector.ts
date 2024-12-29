import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IModulesState } from './interfaces/modules-state.interface';
import { modulesNode } from './modules.reducer';

export const selectModulesFeature = createFeatureSelector<IModulesState>(modulesNode);

export const selectModules = createSelector(
  selectModulesFeature,
  (state: IModulesState) => state.modules
);

export const selectActiveModule = createSelector(
  selectModulesFeature,
  (state: IModulesState) => state.activeModule
);
