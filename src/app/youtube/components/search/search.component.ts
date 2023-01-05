import { Component } from "@angular/core";
import { FiltersService } from "../../services/filters.service";
import { SearchService } from "../../services/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

  constructor(
    private filterService: FiltersService,
    public searchService: SearchService
  ) {
  }

  onFilterSettings() {
    this.filterService.toggleFilter();
  }

  onSearch(value: string) {
    if (value.trim()) this.searchService.search(value);
  }

}
