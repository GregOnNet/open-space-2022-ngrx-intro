import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, of } from "rxjs";
import { actionDispatchedByEffect, actionWithPayload } from "./open-space.actions";

@Injectable()
export class OpenSpaceEffects {
  learnNgRx$ = createEffect(() => this.actions$.pipe(
    ofType(actionWithPayload),
    // Please learn about higher order operators: concatMap, mergeMap, exhaustMap, switchMap
    exhaustMap(action => {
      // Assume we use an injected SERVICE here
      return of(actionDispatchedByEffect({ level: action.level }))
    }))
  );

  constructor(
    private actions$: Actions,
    // private moviesService: MoviesService
  ) { }
}
