export interface BalanceState {
  available: number;
}

export function balanceReducer(
  state: BalanceState = {
    available: 0
  },
  action: any
): BalanceState {
  return state;
}
