import { NgModule } from '@angular/core';

import { AppComponent } from './comonents/app/app.component';
import { NxModule } from '@nrwl/angular';
import { RootStoreModule } from '@mean/frontend/shared/data-access/root-store';
import { RouterModule } from '@angular/router';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { createApollo } from './utils/create-apollo';
import { HttpLink } from 'apollo-angular/http';


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
