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
export class ShoppingCarComponent {
  sidebarVisible2 = false;
}
