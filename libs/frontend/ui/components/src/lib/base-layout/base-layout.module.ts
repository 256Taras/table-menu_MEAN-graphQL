import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { baseLayoutContainers } from '../base-layout.common';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...baseLayoutContainers,
  ],
  exports:[
    ...baseLayoutContainers,
  ]
})
export class BaseLayoutModule { }
