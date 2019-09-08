import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address-service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList;
  constructor(
    private addressService: AddressService
  ) {
  }

  ngOnInit() {
    this.addressList = this.addressService.getAddressList();
    console.log(this.addressList);
  }

}
