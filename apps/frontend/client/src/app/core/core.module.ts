import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { RootStoreModule } from '@mean/frontend/shared/data-access/root-store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

import { createApollo } from './utils/create-apollo';
import { coreContainers, coreRoutes } from './core.common';


@NgModule({
  declarations: [...coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(coreRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ]
})
export class CoreModule {
}
