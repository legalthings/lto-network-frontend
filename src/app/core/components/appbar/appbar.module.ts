import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { AppbarComponent } from './appbar.component';

@NgModule({
  declarations: [AppbarComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [AppbarComponent]
})
export class AppbarModule {}
