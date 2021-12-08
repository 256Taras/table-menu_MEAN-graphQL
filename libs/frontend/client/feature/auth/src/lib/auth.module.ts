import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authContainers, authRoutes } from './auth.common';
import { AuthStoreModule } from '@mean/frontend/shared/data-access/auth-store';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule.forRoot(),
    RouterModule.forChild(authRoutes)
  ],
  exports: [authContainers],
  declarations: [
    ...authContainers
  ]
})
export class AuthModule {
}
