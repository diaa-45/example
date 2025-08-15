import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http : HttpClient) { }

    /* getAll(){
      return this.products
    } */

  getFullProducts(search: string) : Observable<any>{
    let params = new HttpParams()
          .set('title',search);

   return this.http.get(this.url,{params});
  }
  
  
  getProducts(skip: number , limit: number,search: string) : Observable<any>{
    let params = new HttpParams()
          .set('offset',skip)
          .set('limit',limit)
          .set('title',search);

   return this.http.get(this.url,{params});
  }

  addProduct(product:any): Observable<any>{
    return this.http.post(this.url,product);
  }
  getProductById(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  deleteProduct(id: number) : Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
  updateProduct(id : number ,product : any): Observable<any>{
    return this.http.put(`${this.url}/${id}`,product)
  }
}
