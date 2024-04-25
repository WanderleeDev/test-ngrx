import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { SpinnerComponent } from './spinner/spinner.component';
// import { CardProductComponent } from './card-product/card-product.component';
import { MgPrimeModule } from '../mg-prime/mg-prime.module';
import { CardProductComponent } from './card-product/card-product.component';

@NgModule({
  declarations: [NavbarComponent, ShoppingCarComponent, SpinnerComponent, CardProductComponent],
  imports: [CommonModule, MgPrimeModule],
  exports: [NavbarComponent, ShoppingCarComponent, SpinnerComponent, CardProductComponent],
})
export class UiModule {}
