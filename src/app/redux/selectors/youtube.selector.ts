import { State } from "../state.model";
import { createSelector } from "@ngrx/store";
import * as Youtube from "../reducers/youtube.reducer";

const searchResults = (state: State) => state.youtube;

export const searchResultsList = createSelector(
  searchResults,
  (state: Youtube.State) => state.list
);
