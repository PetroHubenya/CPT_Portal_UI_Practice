import { createAction } from '@ngrx/store';

import { LoaderActionsType } from './enums/loader-actions-type.enum';

export const enableLoading = createAction(LoaderActionsType.loadingEnable);
export const disableLoading = createAction(LoaderActionsType.loadingDisable);
