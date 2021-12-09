import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { loginFormContainer } from './login-form.commn';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  declarations: [
    ...loginFormContainer
  ],
  exports:[
    ...loginFormContainer
  ]
})
export class LoginFormModule {}
