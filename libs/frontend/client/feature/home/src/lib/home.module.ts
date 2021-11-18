import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeContainers } from './home.common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...homeContainers
  ],
  exports: [...homeContainers]
})
export class HomeModule {}
