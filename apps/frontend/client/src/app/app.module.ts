import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"

import {AppComponent} from "./app.component";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatCardModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
