import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-actualcart',
  templateUrl: './actualcart.component.html',
  styleUrls: ['./actualcart.component.css']
})
export class ActualcartComponent {

  cartItems: any = [];
  user: any = {};
  userId: any = '';
  totalPrice = 0;

  addressForm: {
    pin: string;
    street: string;
    district: string;
    taluka: string;
  } = {
    pin: '',
    street: '',
    district: '',
    taluka: ''
  };

  constructor(
    public cartservice: CartserviceService,
    public login: LoginserviceService,
    public addtocartservice: AddToCartService,
    public router: Router
  ) {}

  ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userId = this.user.userid;

      this.cartservice.getCartItemsOfUser(this.userId).subscribe((data) => {
        this.cartItems = data;
        console.log(data);
        this.calculateTotalPrice(); // Calculate the total price
      });
    }
  }

  removeFromCart(itemId: number) {
    const index = this.cartItems.findIndex((item: { id: any }) => item.id === itemId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice(); // Recalculate the total price after removing an item
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total: number, item: any) => total + item.price, 0);
    console.log(this.totalPrice);
  }

  buyNow(cartItems: any) {
    this.addtocartservice.cartItamList(cartItems);
    this.router.navigate(['/account/actualcart/address/', this.totalPrice]);
  }
}
