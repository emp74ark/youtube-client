import * as Cards from "./reducers/card.reducer";
import * as Youtube from "./reducers/youtube.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
  cards: Cards.State;
  youtube: Youtube.State;
}

export const reducers: ActionReducerMap<State> = {
  cards: Cards.cardsReducer,
  youtube: Youtube.youtubeReducer
};
