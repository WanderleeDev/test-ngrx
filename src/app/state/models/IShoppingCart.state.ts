import { ShoppingCart } from "./shoppinCart.model";

export interface IShoppingCarState {
    products: Array<ShoppingCart>;
    isLoading: boolean;
    error: string | null;
}
