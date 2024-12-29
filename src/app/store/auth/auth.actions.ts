import { createAction, props } from '@ngrx/store';

import { AuthActionsType } from './enums/auth-actions-type.enum';
import { ISignInProp } from './types/sign-in.prop.type';

export const signInAction = createAction(
  AuthActionsType.signIn,
  props<ISignInProp>()
);

export const logoutAction = createAction(
  AuthActionsType.logout,
);
