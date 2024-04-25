import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ICategoriesState } from '../models/ICategories.state';

export const selectCategoriesFeature = (state: AppState) =>
  state.categoriesState;

export const selectCategories = createSelector(
  selectCategoriesFeature,
  (state: ICategoriesState) => state.categories
);
