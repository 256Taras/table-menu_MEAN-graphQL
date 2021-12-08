import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authContainers } from './auth.common';
import { AuthStoreModule } from '@mean/frontend/shared/data-access/auth-store';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule.forRoot(),
  ],
  exports:[authContainers],
  declarations: [
    ...authContainers
  ],
})
export class AuthModule {}
