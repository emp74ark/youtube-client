import { Component, OnInit } from "@angular/core";
import { FiltersState, Item } from "src/app/shared/interfaces";
import { FiltersService } from "../../services/filters.service";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/state.model";
import { Observable } from "rxjs";
import { searchResultsList } from "../../../redux/selectors/youtube.selector";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  data$: Observable<Item[]>;

  filters!: FiltersState;


  constructor(
    private filterService: FiltersService,
    private store: Store<State>
  ) {
    this.data$ = this.store.select(searchResultsList);
  }

  ngOnInit() {
    this.filterService.settings.subscribe(
      state => this.filters = state
    );
  }
}
