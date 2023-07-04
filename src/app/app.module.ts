import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowProductByCategoryComponent } from './pages/show-product-by-category/show-product-by-category.component';
import { FormsModule } from '@angular/forms';
import { BuynowComponent } from './pages/buynow/buynow.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { ActualcartComponent } from './pages/actualcart/actualcart.component';
import { Location } from '@angular/common';
import { AddressesComponent } from './pages/addresses/addresses.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShowProductComponent,
    CartComponent,
    AccountInfoComponent,
    RegisterComponent,
    ShowProductByCategoryComponent,
    BuynowComponent,
    AdminComponent,
    ActualcartComponent,
    AddressesComponent,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule // Add NgbModule to imports
    ,FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
