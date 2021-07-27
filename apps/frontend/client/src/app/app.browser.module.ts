import {NgModule} from "@angular/core";
import {AppModule} from "./app.module";
import {AppComponent} from "./core/comonents/app/app.component";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    AppModule,
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({logOnly: environment.production}) : []
  ],
  bootstrap:[AppComponent]
})
export class AppBrowserModule {
}
