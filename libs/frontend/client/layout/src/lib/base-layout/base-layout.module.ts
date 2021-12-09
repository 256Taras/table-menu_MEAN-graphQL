import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { baseLayoutContainers } from '../base-layout.common';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule],
  declarations: [...baseLayoutContainers],
  exports: [...baseLayoutContainers],
})
export class BaseLayoutModule {}
