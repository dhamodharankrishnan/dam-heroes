import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { productObjects } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productObjects[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
    console.log('Your product has been added to the cart!');
  }
}
