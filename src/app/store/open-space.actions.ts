import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const actionDispatchedByEffect = createAction('[Open Space / API]: We got experts in NgRx', props<{ level: number }>());
export const actionWithoutPayload = createAction('[OpenSpace] We got started with NgRx');
export const actionWithPayload = createAction('[OpenSpace] We got started with NgRx!!!', props<{ level: number }>());


// Alternative declaring Actions with 'createActionGroup'

export const openSpace = createActionGroup({
  source: 'Open Space',
  events: {
    withoutPayload: emptyProps(),
    withPayload: props<{ level: number }>(),
  }
});

export const openSpaceApi = createActionGroup({
  source: 'Open Space / API',
  events: {
    fromEffect: props<{ level: number }>()
  }
});
