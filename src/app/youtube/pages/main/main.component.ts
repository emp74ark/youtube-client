import { Component, OnInit } from "@angular/core";
import { FiltersState, Item } from "src/app/shared/interfaces";
import { SearchService } from "../../../core/services/search.service";
import { FiltersService } from "../../services/filters.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  list: Item[] = [];

  filters!: FiltersState;

  constructor(
    private searchService: SearchService,
    private filterService: FiltersService
  ) {
  }

  ngOnInit() {
    this.searchService.searchResults.subscribe(
      result => {
        this.list = result.items;
        console.log(result.items);
      }
    );
    this.filterService.settings.subscribe(
      state => this.filters = state
    );
  }
}
