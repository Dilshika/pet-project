import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';
import { AuctionItemsComponent } from './auction-items/auction-items.component';
import { AuctionLandingComponent } from './auction-landing/auction-landing.component';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    SaleItemsComponent,
    AuctionItemsComponent,
    AuctionLandingComponent,
    Page404Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
