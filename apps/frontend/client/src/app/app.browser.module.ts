import {NgModule} from "@angular/core";
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  imports: [
    AppModule,
    !environment.production ? StoreDevtoolsModule.instrument({logOnly: environment.production}) : []
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppBrowserModule {
}
