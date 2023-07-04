import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartItems: any[] = [];
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public addToCart(cart: any): Observable<any> {
    return this.http.post(this.apiUrl+"/add-cart-item", cart);
  }

  public removeFromCart(product: any): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  public getCartItemsOfUser(userId:any) {
    return this.http.get(this.apiUrl+"/cart/"+userId);
  }

  public clearCart(): void {
    this.cartItems = [];
  }

  public checkout(): Observable<any> {
    return this.http.post(this.apiUrl, this.cartItems);
  }
}
