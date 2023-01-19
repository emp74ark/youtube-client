import { Component } from "@angular/core";
import { FiltersService } from "../../services/filters.service";
import { SearchService } from "../../services/search.service";
import { debounceTime, fromEvent } from "rxjs";
import { State } from "../../../redux/state.model";
import { Store } from "@ngrx/store";
import { youtubeSearch } from "../../../redux/actions/youtube.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

  constructor(
    private filterService: FiltersService,
    public searchService: SearchService,
    private store: Store<State>
  ) {
  }

  onFilterSettings() {
    this.filterService.toggleFilter();
  }

  onInput(input: HTMLInputElement) {
    fromEvent(input, "input")
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        result => {
          const { value } = result.target as HTMLInputElement;
          if (value.trim().length >= 3) {
            this.searchService.search(value);
            this.store.dispatch(youtubeSearch());
          }
        }
      );
  }

}
