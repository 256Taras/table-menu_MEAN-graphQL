import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileContainers, userProfileRoutes } from './user-profile.common';
import { UsersStoreModule } from '@mean/frontend/shared/data-access/user-store';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes)
  ],
  exports: [...userProfileContainers],
  declarations: [
    ...userProfileContainers
  ]
})
export class UserProfileModule {
}
