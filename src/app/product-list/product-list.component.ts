import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
constructor() { }

prod1: Product = { id: 100, name: 'Samsung S8', description: 'Samsung S8 - A new mobile...', price: 100, notification: false};
prod2: Product = { id: 200, name: 'Samsung Note', description: '', price: 300, notification: false};
products: Product[] = [ this.prod1, this.prod2];

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
