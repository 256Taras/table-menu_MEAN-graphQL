import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { UsersStoreModule } from '@mean/frontend/shared/data-access/user-store';
import { AuthStoreModule } from '@mean/frontend/shared/data-access/auth-store';
import { RootStoreModule } from '@mean/frontend/shared/data-access/root-store';

import { AppComponent } from './comonents/app/app.component';
import { createApollo } from './utils/create-apollo';


@NgModule({
  declarations: [AppComponent],
  imports: [
    NxModule,
    RootStoreModule,
    AuthStoreModule.forRoot(),
    UsersStoreModule.forRoot(),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class CoreModule {
}
