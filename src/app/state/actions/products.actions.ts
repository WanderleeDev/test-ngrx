import { ProductModel } from '../models/product.model';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Home] Load Products');

export const loadedProducts = createAction(
  '[Home] Loaded Products',
  props<{ products: ProductModel[] }>()
);

export const loadProductsError = createAction(
  '[Home] Load Products Error',
  props<{ error: string }>()
);
