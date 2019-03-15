import { Injectable, ClassProvider } from '@angular/core';

@Injectable()
export class FeeServiceImpl implements FeeService {}

export abstract class FeeService {
  static provider: ClassProvider = {
    provide: FeeService,
    useClass: FeeServiceImpl
  };
}
