import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../iproduct';
// import { AllProducts } from './../AllProducts';
import { Component } from '@angular/core';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList : any = [];
 constructor( private productsService:ProductsService){ }

 ngOnInit():void{
  this.productsList = this.productsService.getAllProducts().subscribe({
    next:(res)=>{this.productsList = res},
    error:(err)=>console.log(err),
  })
 }

 delete(i:any){
  this.productsService.delete(i).subscribe({
    next: (res) => {this.productsList = this.productsList.filter((product:any)=>product.id != i)}
  })
}

}
