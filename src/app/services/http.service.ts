import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly URL_API = 'https://dummyjson.com/products';
  private readonly _http = inject(HttpClient);

  public getData<T>(): Observable<T> {
    return this._http.get<T>(this.URL_API);
  }

  public getProductForCategory<T>(category: string): Observable<T> {
    return this._http.get<T>(`${this.URL_API}/category/${category}`)
  }
}
