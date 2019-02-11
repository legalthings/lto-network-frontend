import { ScreenService, ScreenMode, ScreenSize } from '@app/core';
import { of } from 'rxjs';
import { ClassProvider } from '@angular/core';

export class ScreenServiceMock implements ScreenService {
  static readonly provider: ClassProvider = {
    provide: ScreenService,
    useClass: ScreenServiceMock
  };

  size$ = of(ScreenSize.XL);
  size = ScreenSize.XL;
  mode$ = of(ScreenMode.DESKTOP);
  mode = ScreenMode.DESKTOP;
}
