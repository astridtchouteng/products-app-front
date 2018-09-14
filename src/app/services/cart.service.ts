import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  cartData: IProduct[] = [];


  addToCart(product: IProduct): void {
     this.cartData.push(product);
  }

  getCartProducts(): IProduct[] {
    return this.cartData;
  }
  getCartLength(): number {
    return this.cartData.length;
  }
  getCartTotalAmount(): number {
    let total = 0;
    this.cartData.forEach( record => total += record.unitPrice);
    return total;
  }
  resetCart(): void {
    this.cartData = [];
  }
}
