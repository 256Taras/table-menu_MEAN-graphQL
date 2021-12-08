import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileContainers } from './user-profile.common';
import { UsersStoreModule } from '@mean/frontend/shared/data-access/user-store';

@NgModule({
  imports: [
    CommonModule,
    UsersStoreModule.forRoot(),
  ],
  exports: [...userProfileContainers],
  declarations: [
    ...userProfileContainers
  ]
})
export class UserProfileModule {
}
