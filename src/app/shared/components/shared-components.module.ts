import { NgModule } from '@angular/core';
import { ContentSectionModule } from './content-section';
import { HttpErrorModule } from './http-error/http-error.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';

@NgModule({
  exports: [ContentSectionModule, HttpErrorModule, LoadingSpinnerModule]
})
export class SharedComponentsModule {}
