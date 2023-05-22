import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './pages/home/home.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ShowProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: AccountInfoComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Add RouterModule with defined routes
  ],
  exports: [RouterModule] // Export RouterModule
})
export class AppRoutingModule { }
