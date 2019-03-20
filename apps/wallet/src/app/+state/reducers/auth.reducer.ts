import { LocalUserAccount } from '../../core';
import { AuthActionTypes, AuthAction } from '../actions/auth';
import { LtoAccount } from '@lto/core';

export interface AuthState {
  loading: boolean;
  localAccount: LocalUserAccount | null;
  ltoAccount: LtoAccount | null;
}

const defaultState = { loading: false, localAccount: null, ltoAccount: null };

export function authReducer(state: AuthState = defaultState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.CreateAccount:
    case AuthActionTypes.ImportAccount:
    case AuthActionTypes.Login:
      return { ...state, loading: true };

    case AuthActionTypes.CreateAccountSuccess:
    case AuthActionTypes.ImportAccountSuccess:
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loading: false,
        localAccount: action.payload.userAccount,
        ltoAccount: action.payload.ltoAccount
      };
    case AuthActionTypes.ImportAccountFailed:
    case AuthActionTypes.LoginFailed:
      return {
        ...state,
        loading: false
      };
    case AuthActionTypes.Logout:
      return {
        loading: false,
        localAccount: null,
        ltoAccount: null
      };
  }

  return state;
}
