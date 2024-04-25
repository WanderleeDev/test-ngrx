import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IShoppingCarState } from "../models/IShoppingCart.state";


const selectShoppingCartFeature = (state: AppState) => state.shoppingCartState;

export const selectCartItems = createSelector(
    selectShoppingCartFeature,
    (state: IShoppingCarState) => state.products
);

export const selectCartIsLoading = createSelector(
    selectShoppingCartFeature,
    (state: IShoppingCarState) => state.isLoading
);

export const selectCartError = createSelector(
    selectShoppingCartFeature,
    (state: IShoppingCarState) => state.error
);
