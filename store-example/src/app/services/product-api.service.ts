import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http : HttpClient) { }

    /* getAll(){
      return this.products
    } */

  getProducts() : Observable<any>{
   return this.http.get(this.url);
  }
}
