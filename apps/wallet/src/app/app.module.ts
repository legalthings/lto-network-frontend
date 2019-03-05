import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule as LtoCoreModule, LTO_NETWORK_BYTE } from '@lto/core';
import { environment } from '../environments/environment';
import { CoreModule } from './core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LtoCoreModule.forRoot({
      publicNodeHost: environment.ltoPublicNodeHost
    }),
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
      }
    ])
  ],
  providers: [
    {
      provide: LTO_NETWORK_BYTE,
      useValue: environment.ltoNetworkByte
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
