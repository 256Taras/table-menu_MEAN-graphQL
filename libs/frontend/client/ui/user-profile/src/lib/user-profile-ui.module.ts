import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileUiContainers } from './user-profile-ui.common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...userProfileUiContainers
  ],
  exports:[
    ...userProfileUiContainers
  ]
})
export class UserProfileUiModule {}
