import { createFeatureSelector, createSelector } from '@ngrx/store';
import { openSpaceFeatureKey } from './open-space.feature-key';
import { OpenSpaceFeatureState } from './open-space.state';

const openSpaceFeature = createFeatureSelector<OpenSpaceFeatureState>(openSpaceFeatureKey);

export const currentLevel = createSelector(openSpaceFeature, (state => state.learningLevel));
