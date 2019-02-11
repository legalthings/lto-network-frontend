import { NgModule } from '@angular/core';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [ShortPipe],
  exports: [ShortPipe]
})
export class ShortModule {}
