import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeContainers, homeRoutes } from './home.common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    ...homeContainers
  ],
  exports: [...homeContainers]
})
export class HomeModule {
}
