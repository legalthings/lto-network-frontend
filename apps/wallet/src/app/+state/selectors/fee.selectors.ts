import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeeState } from '../reducers/fee.reducer';

const feeState = createFeatureSelector<FeeState>('fee');

const transferFee = createSelector(
  feeState,
  state => state.transferFee
);
const leasingFee = createSelector(
  feeState,
  state => state.leasingFee
);
const anchorFee = createSelector(
  feeState,
  state => state.anchorFee
);

export const feeQuery = {
  transferFee,
  leasingFee,
  anchorFee
};
