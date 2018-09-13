import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../domain/iproduct';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  product: IProduct = {
    name: '',
    unitPrice: 0
  }; // For the DataBinding
  constructor(private _productService: ProductsService,
                private _router: Router) { }

  ngOnInit() {
  }

  addProduct(p: IProduct) {
    this._productService.addProduct(p).subscribe(
      res => {
        console.log('Ajout du produit : ' + res);
        // Aprés l'ajout si tout fonctionne je redirige vers la liste
        // des produits
        this._router.navigate(['/products']);
      }
    );
  }

}
