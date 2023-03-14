import { EditProductComponent } from './component/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

const routes: Routes =[{
  path:'products',
  // canActivate:[AuthGuard],
  children:[
  { path:'', component: ProductsComponent},
  { path:':id', component: ProductDetailsComponent},
  { path:'edit/:id', component: EditProductComponent},
  ]
}
]

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent,CardComponent,EditProductComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
