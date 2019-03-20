export interface FeeState {
  transferFee: number;
  leasingFee: number;
  anchorFee: number;
}

export function feeReducer(
  state: FeeState = {
    transferFee: 0,
    leasingFee: 0,
    anchorFee: 0
  },
  action: any
): FeeState {
  return state;
}
