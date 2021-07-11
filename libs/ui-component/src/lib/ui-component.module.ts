import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class UiComponentModule {}
