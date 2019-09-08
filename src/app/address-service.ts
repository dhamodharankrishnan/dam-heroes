import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

    constructor(
        private http: HttpClient
      ) {}


      getAddressList() {
        return this.http.get('/assets/addressData.json');
      }
}