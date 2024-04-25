import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectCartItems } from '../../../state/selectors/shoppingCart.select';
import { ShoppingCart } from '../../../state/models/shoppinCart.model';
import {
  addProduct,
  clearShoppingCar,
  loadShoppingCarSuccess,
  removeProduct,
  removeSingleProduct,
} from '../../../state/actions/shoppingCar.action';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.css',
})
export class ShoppingCarComponent implements OnInit {
  private readonly store: Store<AppState> = inject(Store);
  sidebarVisible2 = false;
  products: Array<ShoppingCart> = [];
  selectedProduct$ = this.store.select(selectCartItems);

  ngOnInit(): void {
    this.store.dispatch(loadShoppingCarSuccess());
  }

  public clearShoppingCart() {
    this.store.dispatch(clearShoppingCar());
  }

  public decrementProduct(product: ShoppingCart) {
    this.store.dispatch(removeProduct({ productToRemoved: product }));
  }

  public incrementProduct(product: ShoppingCart) {
    this.store.dispatch(addProduct({ newProduct: product }));
  }

  public removeProduct(product: ShoppingCart) {
    this.store.dispatch(removeSingleProduct({ productToRemoved: product }));
  }
}
