import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersStoreModule } from '@mean/frontend/shared/data-access/user-store';
import { UserProfileUiModule } from '@mean/frontend/client/ui/user-profile';

import { userProfileContainers, userProfileRoutes } from './user-profile.common';


@NgModule({
  imports: [
    CommonModule,
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes),
    UserProfileUiModule,
  ],
  exports: [...userProfileContainers],
  declarations: [
    ...userProfileContainers
  ]
})
export class UserProfileModule {
}
