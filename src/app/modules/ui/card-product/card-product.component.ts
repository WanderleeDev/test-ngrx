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
  @Input({ required: true }) product!: any;
}
