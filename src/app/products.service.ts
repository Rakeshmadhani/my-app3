import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpclient.get<Product[]>('/assets/product.json');
  }
}
