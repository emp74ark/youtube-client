import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/shared/interfaces";
import { SearchService } from "../../services/search.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  list: Item[] = [];

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    this.searchService.searchResults.subscribe(
      result => this.list = result.items
    );
  }
}
