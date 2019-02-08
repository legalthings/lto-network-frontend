import { NgModule } from '@angular/core';
import { ShortModule } from './short/short.module';

@NgModule({
  exports: [ShortModule]
})
export class SharedPipesModule {}
