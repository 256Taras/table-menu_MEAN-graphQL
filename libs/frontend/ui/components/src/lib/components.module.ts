import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { baseLayoutContainers } from './base-layout.common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ...baseLayoutContainers
  ],
  exports:[
    ...baseLayoutContainers
  ]
})
export class ComponentsModule {}
