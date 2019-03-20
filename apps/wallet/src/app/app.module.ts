import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule as LtoCoreModule, LTO_NETWORK_BYTE } from '@lto/core';
import { environment } from '../environments/environment';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AuthGuard } from './core/guards';

import { AppComponent } from './app.component';
import { LoggedInWrapperComponent } from './components/logged-in-wrapper/logged-in-wrapper.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/reducers';
import { effects } from './+state/effects';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [AppComponent, LoggedInWrapperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
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
        component: LoggedInWrapperComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'transfers',
            loadChildren: './transfers/transfers.module#TransfersModule'
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
      }
    ]),
    NxModule.forRoot(),
    StoreModule.forRoot(appReducer, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
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
