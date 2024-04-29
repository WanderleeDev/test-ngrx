import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HttpService } from '../../services/http.service';
import { setCategories, loadCategories } from '../actions/categories.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  private readonly URL_CATEGORIES = 'https://dummyjson.com/products/categories';
  private readonly _actions$ = inject(Actions);
  private readonly _httpService = inject(HttpService);

  public loadCategories$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this._httpService.getData<string[]>(this.URL_CATEGORIES).pipe(
          map((res) => setCategories({ categories: res })),
          catchError(() => of(setCategories({ categories: [] })))
        )
      )
    );
  });
}
