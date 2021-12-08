import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { headerContainer } from './header.common';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  declarations: [...headerContainer],
  exports:[
    ...headerContainer
  ]
})
export class HeaderModule { }
