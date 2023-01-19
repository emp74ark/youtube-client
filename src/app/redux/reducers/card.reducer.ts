import { createReducer, on } from "@ngrx/store";
import { addNewCard, getAllCards } from "../actions/card.actions";
import { Card } from "../../shared/interfaces";

export interface State {
  list: Card[];
}

const initialState: State = {
  list: []
};

export const cardsReducer = createReducer(
  initialState,
  on(getAllCards, (state) => state),

  on(addNewCard, (state, { payload }) => ({
    ...state,
    list: [...state.list, { ...payload, id: Date.now() }]
  }))
);
