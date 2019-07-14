import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { signalObjects } from '../signalObjects';
import { Signal } from '../signal';

@Component({
  selector: 'app-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.css']
})
export class FavoriteColorComponent implements OnInit {

  signals = signalObjects;
  currentSignal;

  favoriteColorControl = new FormControl('');
  constructor() {
  }

  ngOnInit() {
    this.currentSignal = {id: 100, color: 'Black'};
    this.favoriteColorControl.setValue(this.currentSignal.color);
  }

  setSignal( signalFromEvent: Signal) {
      this.currentSignal = signalFromEvent;
      this.favoriteColorControl.setValue(this.currentSignal.color);
    }

}
