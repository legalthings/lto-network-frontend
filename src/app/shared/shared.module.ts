import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NgSuspenseModule } from 'ng-suspense';
import { BlocksTableComponent } from './components/blocks-table/blocks-table.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { DataCardContentComponent } from './components/data-card-content/data-card-content.component';
import { HttpErrorComponent } from './components/http-error/http-error.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { ResponsiveTextComponent } from './components/responsive-text/responsive-text.component';
import { LtoPipe } from './pipes/lto.pipe';

const sharedModules = [CommonModule, FlexLayoutModule, MaterialModule, NgSuspenseModule];
const sharedComponents = [
  BlocksTableComponent,
  ContentSectionComponent,
  BlocksTableComponent,
  DataCardContentComponent,
  HttpErrorComponent,
  LoadingSpinnerComponent,
  TransactionsTableComponent,
  ResponsiveTextComponent
];

const sharedPipes = [LtoPipe];

@NgModule({
  declarations: [...sharedComponents, ...sharedPipes],
  imports: [...sharedModules, RouterModule.forChild([])],
  exports: [
    ...sharedModules,
    // Pipes
    ...sharedPipes,
    // Components
    ...sharedComponents
  ]
})
export class SharedModule {}
