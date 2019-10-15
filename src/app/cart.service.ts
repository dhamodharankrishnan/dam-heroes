import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Using Observable
import { Observable, BehaviorSubject } from 'rxjs';

import { Product } from './product';

// Using Observable
import { from } from 'rxjs';


// Using Observable
export interface ShippingCost {
  type: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[];
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  // Using Observable - Behavior Subject.
  private _shippingCosts = new BehaviorSubject<ShippingCost[]>([]);

  // Defining a readonly observable from the behaviorSubject.
  readonly shippingCosts = this._shippingCosts.asObservable();

  // Node JS server.
  private shippingUrl = 'http://localhost:9090';

  // DataStore that contains shippingCosts object.
  // Camera man with his camera.
  private dataStore: { shippingCosts: ShippingCost[] } = { shippingCosts: [] };

  constructor(private http: HttpClient) {
    this.items = [];
    this.getShippingPrices();
  }

  // Ignore cart related code.....
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
  // Ignore cart related code.....

  // This is equivalent to recording the drama before broadcasting it on TV.
  getShippingPrices() {
    // Get the data from http client service call. - Marriage medai.
    this.http.get<ShippingCost[]>(`${this.shippingUrl}`).subscribe(data => {
      console.log('getShippingPrices :' + data);

      // data - is the video being recorded.
      // Video camera man recording the video.
      this.dataStore.shippingCosts = data;

      // Assigning the values from datastore to the observable.
      // Video gets transmitted to the TV in the hall outside.
      this._shippingCosts.next( Object.assign({}, this.dataStore).shippingCosts);
    }, error => console.log('Could not load Shipping cost.'));
 }

 // shipping-component.ts
 // this.cartService.shippingCosts - will get observable by calling the method below.
 // this.cartService.shippingCosts.subscribe - receives data from the observable.
 getShippingCosts() {
   return this._shippingCosts.asObservable;
 }

  public postPersonInfo() {
    console.log('Before - postPersonInfo');
    const TENANT_API_URL = 'http://localhost:3000/';

    const angularServiceTenantObj =     {
      salutions: 'Mr',
      firstName: 'Suresh',
      lastName: 'Kumar',
      fatherName: 'Andi',
      phone: '6754839837',
      familyMembers: 2,
      address: 'No 30',
      streetAddress: 'Sivan Kovil Street',
      streetAddressLine2: 'Near Head Office',
      city: 'Coimbatore',
      postal: 620903,
      state: 'TamilNadu',
      country: 'INDIA'
  };
    this.http
        .post(TENANT_API_URL + 'tenant', JSON.stringify(angularServiceTenantObj), { headers: this.headers })
        .toPromise()
        .catch(this.handleError);

    console.log('After - postPersonInfo');

  }

  /**
   * Method to handle the error during service call
   * @param error Error message
   */
    handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }


}
