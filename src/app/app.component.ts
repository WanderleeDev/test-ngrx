import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import {
  loadProducts,
  loadProductsError,
  loadedProducts,
} from './state/actions/products.actions';
import { Observable, map } from 'rxjs';
import {
  selectProducts,
  selectProductsError,
  selectProductsIsLoading,
} from './state/selectors/products.selectors';
import { IResponseProduct } from './state/models/IResponseProducts.interface';
import { HttpService } from './services/http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly URL_API = 'https://dummyjson.com/products';
  private readonly store: Store<AppState> = inject(Store);
  private readonly _httpProducts: HttpService = inject(HttpService);

  isLoading$: Observable<boolean> = this.store.select(selectProductsIsLoading);
  products$ = this.store.select(selectProducts);
  errorProducts$ = this.store.select(selectProductsError);

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this._httpProducts
      .getData<IResponseProduct>(this.URL_API)
      .pipe(map((data) => data.products))
      .subscribe({
        next: (res) => this.store.dispatch(loadedProducts({ products: res })),
        error: (e: HttpErrorResponse) =>
          this.store.dispatch(loadProductsError({ error: e.message })),
      });
  }
}
