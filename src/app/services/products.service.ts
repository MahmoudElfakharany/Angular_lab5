import { HttpClient } from '@angular/common/http';
import { Iproduct } from './../component/iproduct';
import { Injectable } from '@angular/core';
import { AllProducts } from './../component/AllProducts'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  sreverURL:string = "http://localhost:3005/products"

  constructor(private httpServ:HttpClient) { }
  getAllProducts(){
    return this.httpServ.get(this.sreverURL);
  }

  getProduct(i :number){

    return this.httpServ.get(`${this.sreverURL}/${i}`);
  }

  delete(i:number){
    return this.httpServ.delete(`${this.sreverURL}/${i}`);
  }

  addProduct(product: Iproduct) {
    return this.httpServ.post(this.sreverURL, product);
  }

  editProduct(i:number, product: Iproduct) {
    return this.httpServ.put(`${this.sreverURL}/${i}`, product);
  }
}
