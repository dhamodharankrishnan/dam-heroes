import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productObjects } from '../products';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit {

  product;
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productObjects[+params.get('productId')];
    });
    }

}
