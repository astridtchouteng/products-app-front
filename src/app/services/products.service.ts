import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:8080/products';

  constructor(private _http: HttpClient) { }

  public getProductsAll(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.URL);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(this.URL + '/' + id);
  }

  public addProduct(product: IProduct): Observable<any> {
    return this._http.post(this.URL, product);
  }

}
