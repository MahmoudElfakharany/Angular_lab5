import { Iproduct } from './../iproduct';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit{
 productID: number= 0;
 product:any | Iproduct ;
  constructor(private activeroute:ActivatedRoute , private serv:ProductsService, private router:Router){

    this.activeroute.paramMap.subscribe(
      res=>{this.productID = Number(res.get('id'))
      this.editForm.controls["inputID"].setValue("");
      this.editForm.controls["inputName"].setValue("");
      this.editForm.controls["inputPrice"].setValue("");
      this.editForm.controls["inputImg"].setValue("");
      this.editForm.controls["inputQuantity"].setValue("");
    
    }
    )
    this.productID = Number(this.activeroute.snapshot.paramMap.get('id'))
  }
  ngOnInit(): void {
    if (this.productID != 0)
    {     
      this.serv.getProduct(this.productID).subscribe({
        next: (res)=> {this.product = res;
        this.editForm.controls["inputID"].setValue(this.product.id);
        this.editForm.controls["inputName"].setValue(this.product.productName);
        this.editForm.controls["inputPrice"].setValue(this.product.price);
        this.editForm.controls["inputImg"].setValue(this.product.imgUrl);
        this.editForm.controls["inputQuantity"].setValue(this.product.quantity);
        }
      });
    }
    else {
      this.product = {};
    }

    
  }
  
  editForm = new FormGroup({
    inputID : new FormControl('',[Validators.required]),
    inputName : new FormControl("defsault name",[Validators.required , Validators.minLength(3)]),
    inputPrice : new FormControl("defsault price", [Validators.required, Validators.min(20)]),
    inputImg : new FormControl("defsault Img", [Validators.required]),
    inputQuantity : new FormControl("defsault Quantity", [Validators.required]),
  })

  get getid(){
    return this.editForm.controls.inputID
  }
  get getname(){
    return this.editForm.controls.inputName
  }
  get getprice(){
    return this.editForm.controls.inputPrice
  }
  get getimg(){
    return this.editForm.controls.inputImg
  }
  get getquantity(){
    return this.editForm.controls.inputQuantity
  }





  submitEdit(e:any){
    e.preventDefault();
    this.product['id'] = this.editForm.value['inputID'];
    this.product['productName'] = this.editForm.value['inputName'];
    this.product['price'] = this.editForm.value['inputPrice'];
    this.product['imgUrl'] = this.editForm.value['inputImg'];
    this.product['quantity'] = this.editForm.value['inputQuantity'];

    
    if (this.productID == 0 )
    {
      this.serv.addProduct(this.product).subscribe({
        next: (res)=>{
          this.router.navigate(['/products'])
        }
      })
    }else if(this.editForm.status == 'VALID')
    {
      this.serv.editProduct(this.productID,this.product).subscribe({
        next: (res)=>{
          this.router.navigate(['/products']);

        }
      })
    }
  }

}
