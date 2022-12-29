import { Component } from "@angular/core";
import { FiltersService } from "../../services/filters.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

  constructor(
    private filterService: FiltersService
  ) {
  }

  onFilterSettings() {
    this.filterService.toggleFilter();
  }

}
