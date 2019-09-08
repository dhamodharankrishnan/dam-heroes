import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // Variable.
  shippingCosts;
  constructor(private cartService: CartService) {
    // Directly by calling getShippingPrices
    // this.shippingCosts = this.cartService.getShippingPrices();

    // Subscribe to the readonly shippingCosts of the CartService.
     this.cartService.shippingCosts.subscribe( updatedShippingCosts => {
       this.shippingCosts = updatedShippingCosts;
     });
  }

  ngOnInit() {
    this.cartService.getShippingPrices();
  }

}
