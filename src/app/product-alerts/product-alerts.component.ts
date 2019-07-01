import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // This product will be passed from Product List component.
  @Input() product;

  // Emits an event when the notify changes.
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
