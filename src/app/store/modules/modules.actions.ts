import { createAction, props } from '@ngrx/store';

import { ModulesActionsType } from './enums/modules-actions-type.enum';
import { IModuleActiveProp } from './types/module-active.prop.type';
import { IModulesLoadedProp } from './types/modules-loaded.prop.type';

export const modulesLoaded = createAction(
  ModulesActionsType.modulesLoaded,
  props<IModulesLoadedProp>(),
);

export const moduleActive = createAction(
  ModulesActionsType.moduleActive,
  props<IModuleActiveProp>(),
);
