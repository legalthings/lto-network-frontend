import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { AppbarComponent } from './appbar.component';

@NgModule({
  declarations: [AppbarComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule.forChild([])],
  exports: [AppbarComponent]
})
export class AppbarModule {}
