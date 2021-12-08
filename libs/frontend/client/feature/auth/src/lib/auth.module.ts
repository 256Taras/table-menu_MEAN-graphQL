import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authContainers } from './auth.common';

@NgModule({
  imports: [CommonModule],
  exports:[authContainers],
  declarations: [
    ...authContainers
  ],
})
export class AuthModule {}
