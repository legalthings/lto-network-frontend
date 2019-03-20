export class ShowNotification {
  readonly type = '[App] show notification';
  constructor(public payload: { message: string; actionLabel?: string; duration?: number }) {}
}
