import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './pages/home/home.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowProductByCategoryComponent } from './pages/show-product-by-category/show-product-by-category.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ActualcartComponent } from './pages/actualcart/actualcart.component';
import { AddressesComponent } from './pages/addresses/addresses.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ShowProductComponent },
  { path: 'cart', component: CartComponent},
  { path: 'actualcart', component: ActualcartComponent},
  { path: 'account/actualcart', component: ActualcartComponent, pathMatch:'full'},
  { path: 'account/actualcart/address/:totalPrice', component: AddressesComponent, pathMatch:'full'},

  {path:'account/admin/addproduct' ,component:AddproductComponent, pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'category/:cid', component: ShowProductByCategoryComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'account', component: AccountInfoComponent,
  children: [
    {
      path: 'admin',
      component: AdminComponent,
    },
   
    {
      path: 'user',
      component: UserComponent,
    },

  ]


},

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
