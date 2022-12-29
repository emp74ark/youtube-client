import { Component, OnInit } from "@angular/core";
import { FiltersService } from "../../services/filters.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  visibility!: boolean;

  constructor(
    private filtersService: FiltersService
  ) {
  }

  ngOnInit() {
    this.filtersService.settings.subscribe(
      value => this.visibility = value.visibility
    );
  }

  onDateFilter() {
    this.filtersService.toggleDateFilter();
  }

  onViewsFilter() {
    this.filtersService.toggleViewsFilter();
  }
}
