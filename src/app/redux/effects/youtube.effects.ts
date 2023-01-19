import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SearchService } from "../../youtube/services/search.service";
import { YoutubeActionsTypes } from "../actions/youtube.actions";
import { catchError, EMPTY, map, mergeMap } from "rxjs";

@Injectable()
export class YoutubeEffects {
  loadSearchResults$ = createEffect(() => this.actions$.pipe(
    ofType(YoutubeActionsTypes.Search),
    mergeMap(() => this.search.searchResults.pipe(
      map(results => ({ type: YoutubeActionsTypes.SearchSuccess, payload: results })),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private search: SearchService
  ) {
  }
}
