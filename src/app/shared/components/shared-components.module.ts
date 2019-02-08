import { NgModule } from '@angular/core';
import { ContentSectionModule } from './content-section';
import { HttpErrorModule } from './http-error/http-error.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { DataCardContentModule } from './data-card-content/data-card-content.module';
import { TransactionsTableModule } from './transactions-table/transactions-table.module';

@NgModule({
  exports: [ContentSectionModule, HttpErrorModule, LoadingSpinnerModule, DataCardContentModule, TransactionsTableModule]
})
export class SharedComponentsModule {}
