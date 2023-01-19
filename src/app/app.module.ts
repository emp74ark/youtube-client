import { NgModule, Provider } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { YoutubeModule } from "./youtube/youtube.module";
import { AuthModule } from "./auth/auth.module";
import { AuthInterceptor } from "./auth/services/auth.interceptor";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./redux/state.model";
import { EffectsModule } from "@ngrx/effects";
import { YoutubeEffects } from "./redux/effects/youtube.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

const AUTH_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YoutubeEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule {
}
