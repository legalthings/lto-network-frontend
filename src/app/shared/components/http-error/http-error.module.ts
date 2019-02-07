import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorComponent } from './http-error.component';

@NgModule({
  declarations: [HttpErrorComponent],
  imports: [CommonModule],
  exports: [HttpErrorComponent]
})
export class HttpErrorModule {}
