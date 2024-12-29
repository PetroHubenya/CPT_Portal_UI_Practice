import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IRolesState } from './interfaces/roles-state.interface';
import { rolesNode } from './roles.reducer';

export const selectRolesFeature = createFeatureSelector<IRolesState>(rolesNode);

export const selectRoles = createSelector(
  selectRolesFeature,
  (state: IRolesState) => state.roles
);
