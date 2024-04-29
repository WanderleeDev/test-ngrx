import { Component, OnInit, inject } from '@angular/core';
import { MegaMenuItem, MenuItemCommandEvent } from 'primeng/api';
import { HttpService } from '../../../services/http.service';
import { Store } from '@ngrx/store';
import { selectCategories } from '../../../state/selectors/categories.select';
import { AppState } from '../../../state/app.state';
import { setCategories } from '../../../state/actions/categories.action';
import {
  loadProductsByCategory,
} from '../../../state/actions/products.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly _httpService: HttpService = inject(HttpService);
  private readonly store: Store<AppState> = inject(Store);
  private readonly _selectCategories$ = this.store.select(selectCategories);

  urlCategories = 'https://dummyjson.com/products/categories';
  categories$ = this.store.select(selectCategories);
  items: MegaMenuItem[] = [];

  ngOnInit(): void {
    this._httpService
      .getData<string[]>(this.urlCategories)
      .subscribe((categories) => {
        this.store.dispatch(setCategories({ categories }));
      });

    this.generateCategoriesMenu();
  }

  public getProductsForCategories(e: MenuItemCommandEvent) {
    if (!e.item?.label) return;

    this.store.dispatch(loadProductsByCategory({category: e.item.label}));
  }

  public generateCategoriesMenu() {
    this._selectCategories$.subscribe((res): void => {
      const categoriesMenu = res.map((category) => ({
        label: category,
        title: category,
        command: (e: MenuItemCommandEvent) => this.getProductsForCategories(e),
      }));

      this.items = [
        {
          label: 'Productos',
          icon: 'pi pi-fw pi-tags',
          title: 'Productos',
          items: [
            [
              {
                label: 'Categorias',
                title: 'Categorias',
                items: categoriesMenu,
              },
            ],
          ],
        },
      ];
    });
  }
}
