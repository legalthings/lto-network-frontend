import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, FlexLayoutModule, MaterialModule]
})
export class SharedModule {}
