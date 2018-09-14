import { Component, OnInit } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct = {name: '' , unitPrice: 0};
  id: number;

  constructor(private _productService: ProductsService,
                  private _cartService: CartService,
                      private _router: Router,
                                  private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.id =  this._route.snapshot.params['id'];
    this.id =  this._route.snapshot.params.id;
    console.log(this.id);
    this._productService.getProductById(this.id).subscribe(
      res => this.product = res,
      err => console.log('Il y a eu une erreur dans getProductById ')
    );
  }

  addToCart() {
    // CartService cart = new CartService();
    // jamais de new sur un service car c'est un singleton
      this._cartService.addToCart(this.product);
      this._router.navigate(['/products']); // Navigation programmatique
  }

}
