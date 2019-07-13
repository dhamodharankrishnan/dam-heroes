import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { productObjects } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productObjects[+params.get('productId')];
    });
  }

}
