import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

const authState = createFeatureSelector<AuthState>('auth');

const loading = createSelector(
  authState,
  state => state.loading
);
const userAccount = createSelector(
  authState,
  state => state.localAccount
);
const ltoAccount = createSelector(
  authState,
  state => state.ltoAccount
);

export const authQuery = {
  loading,
  userAccount,
  ltoAccount
};
