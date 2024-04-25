import { createAction, props } from '@ngrx/store';
import { ShoppingCart } from '../models/shoppinCart.model';

export const loadShoppingCar = createAction('[ShoppingCar] Load Shopping Cart');

export const loadShoppingCarSuccess = createAction(
  '[ShoppingCar] Load Shopping Cart Success'
);

export const addProduct = createAction(
  '[ShoppingCar] Add Product to Shopping Cart',
  props<{ newProduct: ShoppingCart }>()
);
export const removeProduct = createAction(
  '[ShoppingCar] Remove Product to Shopping Cart',
  props<{ productToRemoved: ShoppingCart }>()
);
export const removeSingleProduct = createAction(
  '[ShoppingCar] Remove Single Product to Shopping Cart',
  props<{ productToRemoved: ShoppingCart }>()
)
export const clearShoppingCar = createAction('[ShoppingCar] Clear ShoppingCar');
