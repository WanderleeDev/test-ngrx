import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IProductState } from '../models/IProducts.state';

export const selectProductsFeature = (state: AppState) => state.productsState;

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: IProductState) => state.products
);

export const selectProductsIsLoading = createSelector(
  selectProductsFeature,
  (state: IProductState) => state.isLoading
);

export const selectProductsError = createSelector(
  selectProductsFeature,
  (state: IProductState) => state.error
);
