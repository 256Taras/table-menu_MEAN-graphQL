import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileContainers } from './user-profile.common';

@NgModule({
  imports: [CommonModule],
  exports: [...userProfileContainers],
  declarations: [
    ...userProfileContainers
  ]
})
export class UserProfileModule {
}
