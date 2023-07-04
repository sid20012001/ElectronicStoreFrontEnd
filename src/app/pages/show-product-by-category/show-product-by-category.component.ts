import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-show-product-by-category',
  templateUrl: './show-product-by-category.component.html',
  styleUrls: ['./show-product-by-category.component.css']
})
export class ShowProductByCategoryComponent {
  user: any;
  catId: any = '';
  products: any = [];
  

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductServiceService,
    public cartservice: CartserviceService,
    private addtocartservice:AddToCartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catId = params['cid'];
      console.log('Parameter Value:', this.catId);
    });

    this.productservice.getProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
      },
      (error: any) => {
        console.log('Error fetching products:', error);
      }
    );
  }

  addToCart(product:any) {
   this.addtocartservice.addTOCart(product);
  }
}
