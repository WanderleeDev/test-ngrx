import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly _http = inject(HttpClient);

  public getData<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }

  public getProductForCategory<T>(category: string): Observable<T> {
    return this._http.get<T>(`https://dummyjson.com/products/category/${category}`)
  }
}
