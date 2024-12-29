import { createReducer, on } from '@ngrx/store';

import { logoutAction, signInAction } from './auth.actions';
import { IAuthState } from './interfaces/auth-state.interface';
import { ISignInProp } from './types/sign-in.prop.type';

export const authNode = 'auth';

const initialState: IAuthState = {
  isAuth: false,
  user: null
};

export const authReducer = createReducer<IAuthState>(
  initialState,
  on(signInAction, (state, props: ISignInProp): IAuthState => ({
      ...state,
      isAuth: props.isAuth,
      user: props.user
    })),
  on(logoutAction, (state): IAuthState => initialState),
);
