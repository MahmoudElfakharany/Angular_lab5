import { ProductsService } from './../../services/products.service';
import { Component, Input } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productID : number = 0;
  thisProduct: any | null =null;

  constructor(private acitvatedRoute: ActivatedRoute, private pro :ProductsService,  private router: Router){
    this.productID = Number(this.acitvatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit():void{
    if(this.productID){
    this.thisProduct = this.pro.getProduct(this.productID).subscribe({
      next:(res)=>{this.thisProduct=res}
    });
    }
    else
    {
      this.router.navigate(['**']);
    }

  }

}
