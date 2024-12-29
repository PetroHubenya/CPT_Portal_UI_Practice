import { createAction, props } from '@ngrx/store';

import { RolesActionsType } from './enums/roles-actions-type.enum';
import { IRolesLoadedProp } from './types/roles-loaded.prop.type';

export const rolesLoaded = createAction(
  RolesActionsType.rolesLoaded,
  props<IRolesLoadedProp>()
);
