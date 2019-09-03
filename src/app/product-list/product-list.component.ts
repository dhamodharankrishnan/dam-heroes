import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { productObjects } from '../products';
import { NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
constructor() { }

products = productObjects;
dates = [];
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
productsShared = [];

ngOnInit() {
  for( let index = 1; index <= 31; index++){
    this.dates.push(index);
  }
  // Create an observable to register click event.
  fromEvent(document, 'click').subscribe(
    () => {
      console.log('RxJS Subscription Clicked!');
    },
    () => console.log('RxJS Subscription Error...'),
    () => console.log('RxJS Subscription Complete...')
  );

  let count = 0;
  document.addEventListener('click', () => console.log(`Clicked ${++count} times`));
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
