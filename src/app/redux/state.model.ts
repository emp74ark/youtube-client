import * as Cards from "./reducers/card.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
  cards: Cards.State;
}

export const reducers: ActionReducerMap<State> = {
  cards: Cards.cardsReducer
};
