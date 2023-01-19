import { Item } from "../../shared/interfaces";
import { createReducer, on } from "@ngrx/store";
import { youtubeSearch, youtubeSearchError, youtubeSearchSuccess } from "../actions/youtube.actions";

export interface State {
  list: Item[];
}

const initialState: State = {
  list: []
};

export const youtubeReducer = createReducer(
  initialState,
  on(youtubeSearch, (state) => state),
  on(youtubeSearchSuccess, (state, { payload }) => ({
    ...state,
    list: payload.items
  })),
  on(youtubeSearchError, (state) => state)
);
