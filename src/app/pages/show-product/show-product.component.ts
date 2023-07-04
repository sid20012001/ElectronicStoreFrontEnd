import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchKey = '';

  user: any;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductServiceService,
    public cartservice: CartserviceService,
    public router: Router,
    private addtocartservice: AddToCartService
  ) {}

  ngOnInit() {
    this.productservice.getProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
        this.filteredProducts = data; // Initialize with all products
      },
      (error: any) => {
        console.log('Error fetching products:', error);
      }
    );
  }

  filterProducts(val:string) {
    this.filteredProducts = this.products.filter((product: any) =>
      product.pname.toLowerCase().includes(val.toLowerCase())
    );
  }

  addToCart(product: any) {
    this.addtocartservice.addTOCart(product);
  }
}
