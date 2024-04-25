import { ProductModel } from "./product.model";

export interface IProductState {
    isLoading: boolean;
    products: ReadonlyArray<ProductModel>;
    error: string | null;
}
