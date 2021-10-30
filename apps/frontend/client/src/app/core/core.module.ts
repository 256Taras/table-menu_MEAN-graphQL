import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@mean/frontend/shared/data-access/root-store';

import { AppComponent } from './comonents/app/app.component';

import { createApollo } from './utils/create-apollo';


@NgModule({
  declarations: [AppComponent],
  imports: [
    NxModule,
    RootStoreModule,
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
