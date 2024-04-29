import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // URL puesto como ejemplo, nunca poner a la vista la URL real
  private readonly URL_API = 'https://dummyjson.com/products';
  private readonly _http = inject(HttpClient);

  public getData<T>(): Observable<T> {
    return this._http.get<T>(this.URL_API);
  }

  public getCategories<T>(): Observable<T> {
    return this._http.get<T>(`${this.URL_API}/categories`);
  }

  public getProductForCategory<T>(category: string): Observable<T> {
    return this._http.get<T>(`${this.URL_API}/category/${category}`)
  }
}
