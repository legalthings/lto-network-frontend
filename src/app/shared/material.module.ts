import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule]
})
export class MaterialModule {}
