import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {SignupComponent} from '../app/signup/signup.component';
import { Page404Component } from './page404/page404.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'notFound',component:Page404Component},
  {path:'sell',component:SaleItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
