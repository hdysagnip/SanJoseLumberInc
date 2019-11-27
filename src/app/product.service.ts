import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'                                                              
})
export class ProductService {

  private url:string = "http://localhost:9000";
  private headers = new HttpHeaders()
    .set('Content-Type','application/json');

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(
      this.url + "/products"
    );
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post<any>(
      this.url + "/product", product,
      {headers:this.headers}
    );
  }

  updateProduct(product:Product, id:string):Observable<Product>{
    return this.http.put<Product>(
      this.url + '/product/' + id,
      product,{
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        })
    });
  }

  deleteProduct(id:string){
    return this.http.delete(
      this.url + '/product/' + id);
  }

  constructor(private http:HttpClient) { }
  
}
