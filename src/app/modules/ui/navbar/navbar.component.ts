import { Component, inject } from '@angular/core';
import { MegaMenuItem, MenuItemCommandEvent } from 'primeng/api';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly _httpService: HttpService = inject(HttpService);


  urlCategories = 'https://dummyjson.com/products/categories';

  items: MegaMenuItem[] = [];

  // public generateCategoriesMenu() {
  //   this._selectCategories$.subscribe((res): void => {
  //     const categoriesMenu = res.map((category) => ({
  //       label: category,
  //       title: category,
  //       command: (e: MenuItemCommandEvent) => this.getProductsForCategories(e),
  //     }));

  //     this.items = [
  //       {
  //         label: 'Productos',
  //         icon: 'pi pi-fw pi-tags',
  //         title: 'Productos',
  //         items: [
  //           [
  //             {
  //               label: 'Categorias',
  //               title: 'Categorias',
  //               items: categoriesMenu,
  //             },
  //           ],
  //         ],
  //       },
  //     ];
  //   });
  // }
}
