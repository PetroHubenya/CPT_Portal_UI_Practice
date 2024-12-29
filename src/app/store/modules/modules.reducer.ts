import { createReducer, on } from '@ngrx/store';

import { IModulesState } from './interfaces/modules-state.interface';
import { moduleActive, modulesLoaded } from './modules.actions';
import { IModuleActiveProp } from './types/module-active.prop.type';
import { IModulesLoadedProp } from './types/modules-loaded.prop.type';

export const modulesNode = 'modules';

const initialState: IModulesState = {
  modules: [],
  activeModule: null,
};

export const modulesReducer = createReducer<IModulesState>(
  initialState,
  on(modulesLoaded, (state, props: IModulesLoadedProp): IModulesState => ({
    ...state,
    modules: props.modules
  })),
  on(moduleActive, (state, props: IModuleActiveProp): IModulesState => ({
    ...state,
    activeModule: props.active
  }))
);
