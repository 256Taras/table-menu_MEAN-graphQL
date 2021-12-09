import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { navbarContainer } from './navbar.common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...navbarContainer],
  exports: [...navbarContainer],
})
export class NavbarModule {}
