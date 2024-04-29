import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input({ required: true }) product!: any;
}
