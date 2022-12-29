import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./pages/main/main.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { UfoComponent } from "./pages/ufo/ufo.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { CardComponent } from "./components/card/card.component";
import { DateIndicatorPipe } from "./pipes/date-indicator.pipe";
import { HttpClientModule } from "@angular/common/http";
import { TextTruncatePipe } from "./pipes/text-truncate.pipe";
import { ListOrderPipe } from "./pipes/list-order.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SearchComponent,
    LoginComponent,
    UfoComponent,
    FiltersComponent,
    CardComponent,
    DateIndicatorPipe,
    TextTruncatePipe,
    ListOrderPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
