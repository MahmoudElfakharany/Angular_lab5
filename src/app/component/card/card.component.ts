import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../iproduct';
import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() ThisProduct : Iproduct | null = null ;
  constructor(private productcomp:ProductsComponent ){}

  delete(i:any){
    this.productcomp.delete(i);
  }

}
