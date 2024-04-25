import { Component, Input, inject } from '@angular/core';
import { ProductModel } from '../../../state/models/product.model';
import { Store } from '@ngrx/store';
import { addProduct } from '../../../state/actions/shoppingCar.action';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input({ required: true }) product!: ProductModel;
  private readonly store: Store = inject(Store);

  //TODO Store:  Aquí disparamos una acoin
  public addShoppingCart() {
    this.store.dispatch(
      addProduct({
        newProduct: {
          id: this.product.id,
          name: this.product.title,
          price: this.product.price,
          quantity: 1,
        },
      })
    );
  }
}
