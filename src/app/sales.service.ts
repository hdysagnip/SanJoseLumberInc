import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sales } from './sales';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private url:string = "http://localhost:8080";
  private headers = new HttpHeaders()
    .set('Content-Type','application/json');

    getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(
        this.url + "/product"
      );
    }

  getSales():Observable<Sales[]>{
    return this.http.get<Sales[]>(
      this.url + "/sales"
    );
  }

  addSales(sales:Sales):Observable<any>{
    return this.http.post<any>(
      this.url + "/sales", sales,
      {headers:this.headers}
    );
  }

  updateSales(sales:Sales, id:string):Observable<Sales>{
    return this.http.put<Sales>(
      this.url + '/sales/' + id,
      sales,{
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        })
    });
  }

  deleteSales(id:string){
    return this.http.delete(
      this.url + '/sales/' + id);
  }

  constructor(private http:HttpClient) { }
}
