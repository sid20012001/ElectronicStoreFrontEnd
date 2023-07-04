import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:8080/products'; // Replace with your backend API URL
  products: any[]=[];
 

  constructor(private http: HttpClient) { }

  getProducts() {
    console.log("in get product service");
    return this.http.get(this.apiUrl);
  }

  filteredProducts: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.products);


  filterProducts(searchText: string) {
    const filtered = this.products.filter(product =>
      product.pname.toLowerCase().includes(searchText.toLowerCase())
    );
    this.filteredProducts.next(filtered);
  }


}
