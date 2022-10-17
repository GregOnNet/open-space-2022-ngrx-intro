import { createReducer, on } from "@ngrx/store";
import { actionDispatchedByEffect } from "./open-space.actions";
import { OpenSpaceFeatureState } from "./open-space.state";

const initialState: OpenSpaceFeatureState = {
  learningLevel: 0
};

export const openSpaceReducer = createReducer(
  initialState,

  // Keep an eye on @ngrx/entity or @ngrx-ducks/core simplifying your reducers
  on(actionDispatchedByEffect, (state, action) => {
    const nextState = { ...state };

    nextState.learningLevel = action.level;

    return nextState;
  }),
);
