import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth.reducer';
import { BalanceState, balanceReducer } from './balance.reducer';
import { FeeState, feeReducer } from './fee.reducer';

export interface AppState {
  auth: AuthState;
  balance: BalanceState;
  fee: FeeState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer as any,
  balance: balanceReducer as any,
  fee: feeReducer
};
