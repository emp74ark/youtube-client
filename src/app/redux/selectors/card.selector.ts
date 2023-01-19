import { State } from "../state.model";
import { createSelector } from "@ngrx/store";
import * as Cards from "../reducers/card.reducer";

const selectCards = (state: State) => state.cards;

export const selectCardsList = createSelector(
  selectCards,
  (state: Cards.State) => state.list
);
