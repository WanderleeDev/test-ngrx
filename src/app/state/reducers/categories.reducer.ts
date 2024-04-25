import { createReducer, on } from '@ngrx/store';
import { setCategories } from '../actions/categories.action';
import { ICategoriesState } from '../models/ICategories.state';

export const initialState: ICategoriesState = {
  categories: [],
};

export const categoriesReducer = createReducer(
  initialState,
  on(
    setCategories,
    (state, { categories }): ICategoriesState => ({ ...state, categories })
  )
);
