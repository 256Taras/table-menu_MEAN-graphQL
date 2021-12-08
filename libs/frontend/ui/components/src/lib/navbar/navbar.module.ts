import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { navbarContainer } from './navbar.common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...navbarContainer
  ],
  exports:[
    ...navbarContainer
  ]
})
export class NavbarModule { }
