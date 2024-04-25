import { ProductModel } from "./product.model";

export interface IResponseProduct {
  limit:    number;
  products: ProductModel[];
  skip:     number;
  total:    number;
}
