import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FiltersComponent } from "./components/filters/filters.component";
import { CardComponent } from "./components/card/card.component";
import { ListOrderPipe } from "./pipes/list-order.pipe";
import { ListFilterPipe } from "./pipes/list-filter.pipe";
import { MainComponent } from "./pages/main/main.component";
import { SharedModule } from "../shared/shared.module";
import { DateIndicatorPipe } from "./pipes/date-indicator.pipe";
import { DetailsComponent } from "./pages/details/details.component";


@NgModule({
  declarations: [
    MainComponent,
    FiltersComponent,
    CardComponent,
    ListOrderPipe,
    ListFilterPipe,
    DateIndicatorPipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class YoutubeModule {
}
