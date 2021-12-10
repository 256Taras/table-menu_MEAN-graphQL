import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authContainers } from './auth.common';
import { AuthStoreModule } from '@mean/frontend/shared/data-access/auth-store';

import { LoginFormModule } from "@mean/frontend/client/ui/login-form";


@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule.forRoot(),
    LoginFormModule,
  ],
  exports: [authContainers],
  declarations: [
    ...authContainers
  ]
})
export class AuthModule {
}
