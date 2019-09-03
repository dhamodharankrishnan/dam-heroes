import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Product } from './product';
import { from } from 'rxjs';

export interface ShippingCost {
  type: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[];
  private _shippingCosts = new BehaviorSubject<ShippingCost[]>([]);
  private shippingUrl = 'http://localhost:9090';
  private dataStore: { shippingCosts: ShippingCost[] } = { shippingCosts: [] };

  // Defining a readonly observable from the behaviorSubject.
  readonly shippingCosts = this._shippingCosts.asObservable();

  constructor(private http: HttpClient) {
    this.items = [];
    this.getShippingPrices();
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // This is equivalent to recording the drama before broadcasting it on TV.
  getShippingPrices() {
    this.http.get<ShippingCost[]>(`${this.shippingUrl}`).subscribe(data => {
      console.log('getShippingPrices :' + data);
      this.dataStore.shippingCosts = data;
      this._shippingCosts.next( Object.assign({}, this.dataStore).shippingCosts);
    }, error => console.log('Could not load todos.'));
 }

 getShippingCosts() {
   return this._shippingCosts.asObservable;
 }
}
