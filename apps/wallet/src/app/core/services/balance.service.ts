import { Injectable, ClassProvider } from '@angular/core';
import { Observable, of } from 'rxjs';

interface BalanceInfo {
  regular: number;
  generating: number;
  available: number;
  effective: number;
}

@Injectable()
export class BalanceServiceImpl implements BalanceService {
  balance$ = of({
    regular: 0,
    generating: 0,
    available: 0,
    effective: 0
  });
}

export abstract class BalanceService {
  static provider: ClassProvider = {
    provide: BalanceService,
    useClass: BalanceServiceImpl
  };

  abstract balance$: Observable<BalanceInfo>;
}
