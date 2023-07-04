import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

declare var Razorpay: any;

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
  total: any = '';
  cartItems: any = [];
  userId = '';
  address: any = [];
  showAddressForm = false;
  newAddress: any = {};
  selectedAddress: any;

  constructor(
    private route: ActivatedRoute,
    public addToCartService: AddToCartService,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.total = params['totalPrice'];
      this.cartItems = this.addToCartService.giveCartItam();
      console.log(this.cartItems);

      const userData = localStorage.getItem('user');

      if (userData) {
        const user = JSON.parse(userData);
        this.userId = user.userid;

        this.http
          .get('http://localhost:8080/addresses/' + this.userId)
          .subscribe((data) => {
            this.address = data;
          });
      }
    });
  }

  toggleAddressForm() {
    this.showAddressForm = !this.showAddressForm;
  }

  saveAddress() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      const userIdd = user.userid;
      this.newAddress.userId = userIdd;
    }

    console.log(this.newAddress);

    this.http
      .post('http://localhost:8080/addresses', this.newAddress)
      .subscribe((data) => {
        this.address.push(data);
        this.newAddress = {};
        this.showAddressForm = false;
      });
  }

  removeAddress(addressId: any) {
    this.http
      .delete('http://localhost:8080/addresses/' + addressId)
      .subscribe(() => {
        alert('Address Removed Successfully');
        this.address = this.address.filter(
          (ad: any) => ad.addressId !== addressId
        );
      });
  }

  buyNow() {
    if (this.selectedAddress && this.cartItems.length > 0) {
      const productIds = this.cartItems.map((item: any) => item.productId);
      const payload = {
        addressId: this.selectedAddress.addressId,
        productIds: productIds,
        totalPrice: this.total,
        userId: this.userId,
      };

      this.http
        .post('http://localhost:8080/create_order', payload)
        .subscribe((response: any) => {
          console.log(response);
          if (response.status == 'created') {
            var options = {
              key: 'rzp_test_wQ5qYNqZEJAHIG',
              amount: response.amount,
              currency: 'INR',
              name: 'EazyCart',
              description: 'EasyCart',
              image:
                'https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg',
              order_id: response.id,
              handler: (response: {
                razorpay_payment_id: any;
                razorpay_order_id: any;
                razorpay_signature: any;
              }) => {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                alert('Payment is successful');

                // Send the payment details to the backend
                const paymentDetails = {
                  addressId: this.selectedAddress.addressId,
                  userId: this.userId,
                  productIds: productIds,
                  paymentId: response.razorpay_payment_id,
                };

                this.http
                  .post(
                    'http://localhost:8080/payment_success',
                    paymentDetails
                  )
                  .subscribe((data: any) => {
                    console.log(data);

                    // Reset the selected address and cart items
                    this.selectedAddress = null;
                    this.cartItems = [];

                    // Reset the address form and hide it
                    this.newAddress = {};
                    this.showAddressForm = false;
                  });
              },
              prefill: {
                name: '',
                email: '',
                contact: '',
              },
              notes: {
                address: 'Razorpay Corporate Office',
              },
              theme: {
                color: '#3399cc',
              },
            };

            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response: {
              error: {
                code: any;
                description: any;
                source: any;
                step: any;
                reason: any;
                metadata: { order_id: any; payment_id: any };
              };
            }) {
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
            });

            rzp1.open();
          }
        });
    }
  }
}
