import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    
    const observable = new Observable(subscriber => {
      // subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // subscriber.error('Please pay your channel balance');
      setTimeout(() => {
        // subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('Subscriber got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('Completed...Subscription'); }
    });
    console.log('just after subscribe');
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.log('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    
  }
}
