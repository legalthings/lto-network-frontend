import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule]
})
export class MaterialModule {}
