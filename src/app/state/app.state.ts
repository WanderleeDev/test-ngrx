import { IProductState } from './models/IProducts.state';
import { productsReducer } from './reducers/products.reducers';
import { ICategoriesState } from './models/ICategories.state';
import { categoriesReducer } from './reducers/categories.reducer';
import { IShoppingCarState } from './models/IShoppingCart.state';
import { shoppingCartReducer } from './reducers/shoppingCart.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  productsState: IProductState;
  categoriesState: ICategoriesState;
  shoppingCartState: IShoppingCarState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  productsState: productsReducer,
  categoriesState: categoriesReducer,
  shoppingCartState: shoppingCartReducer,
};
