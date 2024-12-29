import { createReducer, on } from '@ngrx/store';

import { IRolesState } from './interfaces/roles-state.interface';
import { rolesLoaded } from './roles.actions';
import { IRolesLoadedProp } from './types/roles-loaded.prop.type';

export const rolesNode = 'roles';

const initialState: IRolesState = {
  roles: []
};

export const rolesReducer = createReducer<IRolesState>(
  initialState,
  on(rolesLoaded, (state, props: IRolesLoadedProp): IRolesState => ({
    ...state,
    roles: props.roles
  }))
);
