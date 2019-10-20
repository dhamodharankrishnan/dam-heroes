import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { productObjects } from '../products';
import { CartService } from '../cart.service';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  selectedDate = new FormControl('');
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productObjects[+params.get('productId')];
    });

    // let count = 0;
    // document.addEventListener('click', () => console.log(`Bought ${++count} times`));

    fromEvent(document, 'click')
    .pipe(scan(count => count + 1, 0))
    .subscribe(count => console.log(`Bought ${count} times`));

  }

  addToCart(product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart! on :' + this.selectedDate);
    console.log('Your product has been added to the cart!');
    console.log(this.selectedDate.value);
  }
}
