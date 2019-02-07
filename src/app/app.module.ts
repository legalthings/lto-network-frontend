import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LTO_PUBLIC_NODE_HOST } from './core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule],
  providers: [
    {
      provide: LTO_PUBLIC_NODE_HOST,
      useValue: environment.ltoPublicNodeHost
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
