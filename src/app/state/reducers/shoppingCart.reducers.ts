import { createReducer, on } from '@ngrx/store';
import { IShoppingCarState } from '../models/IShoppingCart.state';
import {
  addProduct,
  removeProduct,
  loadShoppingCar,
  clearShoppingCar,
  loadShoppingCarSuccess,
  removeSingleProduct,
} from '../actions/shoppingCar.action';

export const initialState: IShoppingCarState = {
  products: [],
  isLoading: false,
  error: null,
};

export const shoppingCartReducer = createReducer(
  initialState,
  on(
    loadShoppingCar,
    (state): IShoppingCarState => ({ ...state, isLoading: true })
  ),
  on(loadShoppingCarSuccess, (state): IShoppingCarState => state),
  on(
    addProduct,
    (state, { newProduct }): IShoppingCarState => {
      const index = state.products.findIndex((p) => p.id === newProduct.id);
      if (index === -1) return { ...state, products: [...state.products, newProduct] };

      return {
        ...state,
        products: state.products.map((p) =>
          p.id === newProduct.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    }
  ),
  on(removeProduct, (state, { productToRemoved }): IShoppingCarState => {
    const index = state.products.findIndex((p) => p.id === productToRemoved.id);
    if (index === -1) return state;

    const isSingleProduct = state.products[index]?.quantity === 1;

    return isSingleProduct
      ? {
          ...state,
          products: state.products.filter((p) => p.id !== productToRemoved.id),
        }
      : {
          ...state,
          products: state.products.map((p) =>
            p.id === productToRemoved.id ? { ...p, quantity: p.quantity - 1 } : p
          ),
        };
  }),
  on(removeSingleProduct, (state, { productToRemoved }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== productToRemoved.id),
  })),
  on(
    clearShoppingCar,
    (state): IShoppingCarState => ({ ...state, products: [] })
  )
);
