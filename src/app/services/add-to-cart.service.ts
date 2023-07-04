import { Injectable } from '@angular/core';
import { CartserviceService } from './cartservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchKey = '';
  cart:any={
    "productId":'',
    "pName":'',
    "price":'',
    "pDescription":'',
    "url":'',
    "discount":'',
    "quantity":'',
    "userid":''
  }
  user: any;
  cartitam:any=[];

  constructor(private cartservice:CartserviceService,private router:Router) { }

addTOCart(product:any){
  
  console.log(product);

  this.cart.productId = product.pid;
  this.cart.pname = product.pname;
  this.cart.price = product.price;
  this.cart.pdescription = product.pdescription;
  this.cart.discount = product.discount;
  this.cart.url = product.url;
  this.cart.quantity = 1;    
  
  

  const userData = localStorage.getItem('user');

  if(userData!==null && userData!==undefined  && userData!=="0"){
    this.user = JSON.parse(userData);
    this.cart.userid = this.user.userid;
    console.log(this.cart);
    this.cartservice.addToCart(this.cart).subscribe((data) => {
      alert('Product added to cart!');
    });
  }else{
    this.router.navigate(['/cart'])
  }
}

cartItamList(itam:any){
  console.log("assignig car itam" + itam);
  this.cartitam=itam;
}

giveCartItam(){
  
  console.log("in givecart")
  
  return this.cartitam;
}


}
