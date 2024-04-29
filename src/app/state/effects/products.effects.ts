import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { IResponseProduct } from '../models/IResponseProducts.interface';
import { HttpErrorResponse } from '@angular/common/http';
import {
  loadProducts,
  loadProductsError,
  loadedProducts,
  loadProductsByCategory,
} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  private readonly URL_API = 'https://dummyjson.com/products';
  private readonly actions$ = inject(Actions);
  private readonly _http = inject(HttpService);

  public loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this._http.getData<IResponseProduct>(this.URL_API).pipe(
          map(({products}) => loadedProducts({ products })),
          catchError((e: HttpErrorResponse) =>
            of(loadProductsError({ error: e.message }))
          )
        )
      )
    );
  });

  public loadByProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsByCategory),
      switchMap(({ category }) =>
        this._http.getProductForCategory<IResponseProduct>(category).pipe(
          map(({ products }) => loadedProducts({ products })),
          catchError((e: HttpErrorResponse) =>
            of(loadProductsError({ error: e.message }))
          )
        )
      )
    );
  });
}
