import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { headerContainer } from './header.common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...headerContainer],
  exports:[
    ...headerContainer
  ]
})
export class HeaderModule { }
