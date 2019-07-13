import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { productObjects } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
constructor() { }

products = productObjects;

ngOnInit() {
}

share(product: Product) {
  console.log('productId :' + product.name + ' has been shared...');
  alert('productId :' + product.name + ' has been shared...');
}

onNotify(product: Product) {
  // console.log('You will be notified when the product ' + product.name + ' goes on sale.');
  // alert('You will be notified when the product goes on sale.');
  product.notification = true;
}

}
