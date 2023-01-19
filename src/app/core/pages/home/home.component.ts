import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "../../../redux/state.model";
import { Card } from "../../../shared/interfaces";
import { selectCardsList } from "../../../redux/selectors/card.selector";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent {

  data$: Observable<Card[]>;

  constructor(private store: Store<State>) {
    this.data$ = store.select(selectCardsList);
  }

}
