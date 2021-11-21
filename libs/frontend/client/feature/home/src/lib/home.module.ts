import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeContainers } from './home.common';

import { AuthStoreModule } from '@mean/frontend/shared/data-access/auth-store';
import { UsersStoreModule } from '@mean/frontend/shared/data-access/user-store';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule.forRoot(),
    UsersStoreModule.forRoot()],
  declarations: [
    ...homeContainers
  ],
  exports: [...homeContainers]
})
export class HomeModule {
}
