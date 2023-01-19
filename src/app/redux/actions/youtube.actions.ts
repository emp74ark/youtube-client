import { createAction, props } from "@ngrx/store";
import { List } from "../../shared/interfaces";

export enum YoutubeActionsTypes {
  Search = "[Youtube] Load search results",
  SearchSuccess = "[Youtube] Search successful",
  SearchError = "[Youtube] Search error"
}

export const youtubeSearch = createAction(YoutubeActionsTypes.Search);

export const youtubeSearchSuccess = createAction(
  YoutubeActionsTypes.SearchSuccess,
  props<{ payload: List }>()
);

export const youtubeSearchError = createAction(YoutubeActionsTypes.SearchError);
