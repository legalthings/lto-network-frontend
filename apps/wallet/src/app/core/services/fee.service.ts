import { Injectable, ClassProvider } from '@angular/core';
import { Observable, of } from 'rxjs';

interface FeeInformation {
  transfer: number;
  lease: number;
  anchor: number;
}

@Injectable()
export class FeeServiceImpl implements FeeService {
  fees$ = of({
    transfer: 1,
    lease: 1,
    anchor: 1
  });
}

export abstract class FeeService {
  static provider: ClassProvider = {
    provide: FeeService,
    useClass: FeeServiceImpl
  };

  abstract fees$: Observable<FeeInformation>;
}
