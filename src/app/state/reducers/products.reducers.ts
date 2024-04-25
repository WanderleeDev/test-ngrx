import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadedProducts,
  loadProductsError,
} from '../actions/products.actions';
import { IProductState } from '../models/IProducts.state';

export const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state): IProductState => ({ ...state, isLoading: true })),
  on(
    loadedProducts,
    (state, { products }): IProductState => ({
      ...state,
      products,
      isLoading: false,
    })
  ),
  on(loadProductsError, (state, { error }): IProductState => ({ ...state, error, isLoading: false }))
);
