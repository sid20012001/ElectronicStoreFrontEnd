import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:any[]=[];


  constructor(private productservice:ProductServiceService,private addtocartservice:AddToCartService){
   
  }

  ngOnInit(){
    this.productservice.getProducts().subscribe((data:any)=>this.products=data);
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  addToCart(product:any){
    this.addtocartservice.addTOCart(product);
  }
 
}
