import { ProductsModule } from './products.module';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:'home', component: HomeComponent},
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent}, 
  { path:'**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
