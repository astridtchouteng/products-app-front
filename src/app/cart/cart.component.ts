import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../domain/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartproduct: IProduct[] = [];
  totalAmount = 0;
  constructor(private _cartservice: CartService) { }

  ngOnInit() {
    this.cartproduct = this._cartservice.getCartProducts();
    this.totalAmount = this._cartservice.getCartTotalAmount();
  }

  Commander() {
  }

}
