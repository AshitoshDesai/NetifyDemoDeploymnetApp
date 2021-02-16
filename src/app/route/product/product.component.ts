import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService : ProductService) { }

  ngOnInit() {
  }

  addToCart(prod){

    this.productService.myCart.push({
      name: prod.name,
      nameMr: prod.nameMr,
      price: prod.price
    });
    this.productService.cartItemCount = this.productService.cartItemCount + 1;
    this.productService.cartItemPrice = this.productService.cartItemPrice + prod.price;

  }

}
